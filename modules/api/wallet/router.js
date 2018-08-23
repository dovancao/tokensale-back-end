const express = require('express');
const  Web3 = require('web3');
const lightwallet = require('eth-lightwallet');
const  HookedWeb3Provider = require('hooked-web3-provider');
const defaultConfig = require('../../../config');
const jwt = require('jsonwebtoken');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const keccak256 = require('js-sha3').keccak256;
let web3 = new Web3();

let Router = express.Router();

Router.post('/new-wallet', function(req,res){
    function setWeb3Provider(keystore){
        let web3Provider = new HookedWeb3Provider({
            host: "https://ropsten.infura.io/JSNq1F7CXtysVQqxYM1h",
            transaction_signer: keystore
        });
        web3.setProvider(web3Provider);
    }
    
    let passwordOfUser = req.body.password;
    let secretSeed = lightwallet.keystore.generateRandomSeed();

    lightwallet.keystore.createVault({
        password: passwordOfUser,
        seedPhrase: secretSeed,
        hdPathString: "m/0'/0'/0'"
    }, function(err,ks){
        ks.keyFromPassword(passwordOfUser, function(err,pwDerivedKey){
            if(err) console.log(err);
            ks.generateNewAddress(pwDerivedKey, 1);
            let address = ks.getAddresses()[0];
            let private_key = ks.exportPrivateKey(address,pwDerivedKey);
            let ksString = ks;
            
            res.send({
                keystoreFile: ksString,
                address: address,
                private_key: private_key,
                secretSeed: secretSeed
            });
        })
    })
})

Router.post('/open-wallet', function(req, res){
    try {
        const generatorPoint = ec.g;
        const pubKeyCoordinates = generatorPoint.mul(req.body.privateKey);

        const x = pubKeyCoordinates.getX().toString('hex');
        const y = pubKeyCoordinates.getY().toString('hex');

        const publicKey = x + y;
        const hashOfPublicKey = keccak256(new Buffer(publicKey, 'hex'));
        const ethAddressBuffer = new Buffer(hashOfPublicKey,'hex');

        const ethAddressWithPrefix  = `0x${ethAddressBuffer.slice(-20).toString('hex')}`;
        
        // expiresIn: by time - create token 
        const expiresIn = defaultConfig.expiresIn;
        const token = jwt.sign({privateKey: req.body.privateKey}, defaultConfig.secret ,{ expiresIn })

        // send cookie for client 
        res.cookie(`token_${req.body.private_key}`, token, {
            domain: defaultConfig.cookieDomain,
            maxAge: defaultConfig.expiresIn * 100
        })
        .status(200)
        .send({
            token: token,
            address: ethAddressWithPrefix 
        })
    } catch (error) {
        console.log(error);
        res
            .status(error.status || 500)
            .send(error.message || 'Private key is wrong!')
    }
})

module.exports = Router;

