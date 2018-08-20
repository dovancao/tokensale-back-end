const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const defaultConfig = require('./config');

const WalletRouter = require('./modules/api/wallet/router');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/wallet',WalletRouter);

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if(err) console.log(err)
    else console.log("Server is listening");
})