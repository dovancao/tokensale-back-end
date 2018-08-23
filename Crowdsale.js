const Crowdsale = {
  "contractName": "Crowdsale",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "rate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "weiRaised",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "wallet",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_rate",
          "type": "uint256"
        },
        {
          "name": "_wallet",
          "type": "address"
        },
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "purchaser",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokenPurchase",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "name": "buyTokens",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506040516060806106ec83398101806040528101908080519060200190929190805190602001909291908051906020019092919050505060008311151561005657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561009257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156100ce57600080fd5b8260028190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050610584806101686000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632c4e722e146100785780634042b66f146100a3578063521eb273146100ce578063ec8ac4d814610125578063fc0c546a1461015b575b610076336101b2565b005b34801561008457600080fd5b5061008d610280565b6040518082815260200191505060405180910390f35b3480156100af57600080fd5b506100b8610286565b6040518082815260200191505060405180910390f35b3480156100da57600080fd5b506100e361028c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610159600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101b2565b005b34801561016757600080fd5b506101706102b2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000803491506101c283836102d7565b6101cb82610327565b90506101e28260035461034590919063ffffffff16565b6003819055506101f28382610361565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f623b3804fa71d67900d064613da8f94b9617215ee90799290593e1745087ad188484604051808381526020018281526020019250505060405180910390a3610269838361036f565b610271610373565b61027b83836103de565b505050565b60025481565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561031357600080fd5b6000811415151561032357600080fd5b5050565b600061033e600254836103e290919063ffffffff16565b9050919050565b6000818301905082811015151561035857fe5b80905092915050565b61036b828261041a565b5050565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156103db573d6000803e3d6000fd5b50565b5050565b6000808314156103f55760009050610414565b818302905081838281151561040657fe5b0414151561041057fe5b8090505b92915050565b61046682826000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661046a9092919063ffffffff16565b5050565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561050d57600080fd5b505af1158015610521573d6000803e3d6000fd5b505050506040513d602081101561053757600080fd5b8101908080519060200190929190505050151561055357600080fd5b5050505600a165627a7a723058206f6cfcc2282211c1ce3c2490cecf12ba2b7191f6f18cc4226f560f47f6ad56e40029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632c4e722e146100785780634042b66f146100a3578063521eb273146100ce578063ec8ac4d814610125578063fc0c546a1461015b575b610076336101b2565b005b34801561008457600080fd5b5061008d610280565b6040518082815260200191505060405180910390f35b3480156100af57600080fd5b506100b8610286565b6040518082815260200191505060405180910390f35b3480156100da57600080fd5b506100e361028c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610159600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101b2565b005b34801561016757600080fd5b506101706102b2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000803491506101c283836102d7565b6101cb82610327565b90506101e28260035461034590919063ffffffff16565b6003819055506101f28382610361565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f623b3804fa71d67900d064613da8f94b9617215ee90799290593e1745087ad188484604051808381526020018281526020019250505060405180910390a3610269838361036f565b610271610373565b61027b83836103de565b505050565b60025481565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561031357600080fd5b6000811415151561032357600080fd5b5050565b600061033e600254836103e290919063ffffffff16565b9050919050565b6000818301905082811015151561035857fe5b80905092915050565b61036b828261041a565b5050565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156103db573d6000803e3d6000fd5b50565b5050565b6000808314156103f55760009050610414565b818302905081838281151561040657fe5b0414151561041057fe5b8090505b92915050565b61046682826000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661046a9092919063ffffffff16565b5050565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561050d57600080fd5b505af1158015610521573d6000803e3d6000fd5b505050506040513d602081101561053757600080fd5b8101908080519060200190929190505050151561055357600080fd5b5050505600a165627a7a723058206f6cfcc2282211c1ce3c2490cecf12ba2b7191f6f18cc4226f560f47f6ad56e40029",
  "sourceMap": "831:5238:3:-;;;1935:226;8:9:-1;5:2;;;30:1;27;20:12;5:2;1935:226:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2022:1;2014:5;:9;2006:18;;;;;;;;2057:1;2038:21;;:7;:21;;;;2030:30;;;;;;;;2092:1;2074:20;;:6;:20;;;;2066:29;;;;;;;;2109:5;2102:4;:12;;;;2129:7;2120:6;;:16;;;;;;;;;;;;;;;;;;2150:6;2142:5;;:14;;;;;;;;;;;;;;;;;;1935:226;;;831:5238;;;;;;",
  "deployedSourceMap": "831:5238:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2391:21;2401:10;2391:9;:21::i;:::-;831:5238;1304:19;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1304:19:3;;;;;;;;;;;;;;;;;;;;;;;1354:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1354:24:3;;;;;;;;;;;;;;;;;;;;;;;1002:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1002:21:3;;;;;;;;;;;;;;;;;;;;;;;;;;;2553:577;;;;;;;;;;;;;;;;;;;;;;;;;;;;940:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;940:18:3;;;;;;;;;;;;;;;;;;;;;;;;;;;2553:577;2616:17;2747:14;2636:9;2616:29;;2651:45;2672:12;2686:9;2651:20;:45::i;:::-;2764:26;2780:9;2764:15;:26::i;:::-;2747:43;;2829:24;2843:9;2829;;:13;;:24;;;;:::i;:::-;2817:9;:36;;;;2860:38;2877:12;2891:6;2860:16;:38::i;:::-;2948:12;2909:88;;2930:10;2909:88;;;2968:9;2985:6;2909:88;;;;;;;;;;;;;;;;;;;;;;;;3004:47;3027:12;3041:9;3004:22;:47::i;:::-;3058:15;:13;:15::i;:::-;3079:46;3101:12;3115:9;3079:21;:46::i;:::-;2553:577;;;:::o;1304:19::-;;;;:::o;1354:24::-;;;;:::o;1002:21::-;;;;;;;;;;;;;:::o;940:18::-;;;;;;;;;;;;;:::o;3779:175::-;3916:1;3892:26;;:12;:26;;;;3884:35;;;;;;;;3947:1;3933:10;:15;;3925:24;;;;;;;;3779:175;;:::o;5796:121::-;5868:7;5892:20;5907:4;;5892:10;:14;;:20;;;;:::i;:::-;5885:27;;5796:121;;;:::o;1238:128:6:-;1298:9;1324:2;1319;:7;1315:11;;1344:2;1339:1;:7;;1332:15;;;;;;1360:1;1353:8;;1238:128;;;;:::o;5024:150:3:-;5127:42;5142:12;5156;5127:14;:42::i;:::-;5024:150;;:::o;5427:131::-;;;:::o;5996:71::-;6036:6;;;;;;;;;;;:15;;:26;6052:9;6036:26;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6036:26:3;5996:71::o;4232:130::-;;;:::o;203:380:6:-;263:9;495:1;489:2;:7;485:36;;;513:1;506:8;;;;485:36;536:2;531;:7;527:11;;561:2;555;551:1;:6;;;;;;;;:12;544:20;;;;;;577:1;570:8;;203:380;;;;;:::o;4625:152:3:-;4726:46;4745:12;4759;4726:5;;;;;;;;;;;:18;;;;:46;;;;;:::i;:::-;4625:152;;:::o;368:149:12:-;483:6;:15;;;499:3;504:6;483:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;483:28:12;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;483:28:12;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;483:28:12;;;;;;;;;;;;;;;;475:37;;;;;;;;368:149;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../token/ERC20/ERC20.sol\";\nimport \"../math/SafeMath.sol\";\nimport \"../token/ERC20/SafeERC20.sol\";\n\n\n/**\n * @title Crowdsale\n * @dev Crowdsale is a base contract for managing a token crowdsale,\n * allowing investors to purchase tokens with ether. This contract implements\n * such functionality in its most fundamental form and can be extended to provide additional\n * functionality and/or custom behavior.\n * The external interface represents the basic interface for purchasing tokens, and conform\n * the base architecture for crowdsales. They are *not* intended to be modified / overridden.\n * The internal interface conforms the extensible and modifiable surface of crowdsales. Override\n * the methods to add functionality. Consider using 'super' where appropriate to concatenate\n * behavior.\n */\ncontract Crowdsale {\n  using SafeMath for uint256;\n  using SafeERC20 for ERC20;\n\n  // The token being sold\n  ERC20 public token;\n\n  // Address where funds are collected\n  address public wallet;\n\n  // How many token units a buyer gets per wei.\n  // The rate is the conversion between wei and the smallest and indivisible token unit.\n  // So, if you are using a rate of 1 with a DetailedERC20 token with 3 decimals called TOK\n  // 1 wei will give you 1 unit, or 0.001 TOK.\n  uint256 public rate;\n\n  // Amount of wei raised\n  uint256 public weiRaised;\n\n  /**\n   * Event for token purchase logging\n   * @param purchaser who paid for the tokens\n   * @param beneficiary who got the tokens\n   * @param value weis paid for purchase\n   * @param amount amount of tokens purchased\n   */\n  event TokenPurchase(\n    address indexed purchaser,\n    address indexed beneficiary,\n    uint256 value,\n    uint256 amount\n  );\n\n  /**\n   * @param _rate Number of token units a buyer gets per wei\n   * @param _wallet Address where collected funds will be forwarded to\n   * @param _token Address of the token being sold\n   */\n  constructor(uint256 _rate, address _wallet, ERC20 _token) public {\n    require(_rate > 0);\n    require(_wallet != address(0));\n    require(_token != address(0));\n\n    rate = _rate;\n    wallet = _wallet;\n    token = _token;\n  }\n\n  // -----------------------------------------\n  // Crowdsale external interface\n  // -----------------------------------------\n\n  /**\n   * @dev fallback function ***DO NOT OVERRIDE***\n   */\n  function () external payable {\n    buyTokens(msg.sender);\n  }\n\n  /**\n   * @dev low level token purchase ***DO NOT OVERRIDE***\n   * @param _beneficiary Address performing the token purchase\n   */\n  function buyTokens(address _beneficiary) public payable {\n\n    uint256 weiAmount = msg.value;\n    _preValidatePurchase(_beneficiary, weiAmount);\n\n    // calculate token amount to be created\n    uint256 tokens = _getTokenAmount(weiAmount);\n\n    // update state\n    weiRaised = weiRaised.add(weiAmount);\n\n    _processPurchase(_beneficiary, tokens);\n    emit TokenPurchase(\n      msg.sender,\n      _beneficiary,\n      weiAmount,\n      tokens\n    );\n\n    _updatePurchasingState(_beneficiary, weiAmount);\n\n    _forwardFunds();\n    _postValidatePurchase(_beneficiary, weiAmount);\n  }\n\n  // -----------------------------------------\n  // Internal interface (extensible)\n  // -----------------------------------------\n\n  /**\n   * @dev Validation of an incoming purchase. Use require statements to revert state when conditions are not met. Use `super` in contracts that inherit from Crowdsale to extend their validations.\n   * Example from CappedCrowdsale.sol's _preValidatePurchase method: \n   *   super._preValidatePurchase(_beneficiary, _weiAmount);\n   *   require(weiRaised.add(_weiAmount) <= cap);\n   * @param _beneficiary Address performing the token purchase\n   * @param _weiAmount Value in wei involved in the purchase\n   */\n  function _preValidatePurchase(\n    address _beneficiary,\n    uint256 _weiAmount\n  )\n    internal\n  {\n    require(_beneficiary != address(0));\n    require(_weiAmount != 0);\n  }\n\n  /**\n   * @dev Validation of an executed purchase. Observe state and use revert statements to undo rollback when valid conditions are not met.\n   * @param _beneficiary Address performing the token purchase\n   * @param _weiAmount Value in wei involved in the purchase\n   */\n  function _postValidatePurchase(\n    address _beneficiary,\n    uint256 _weiAmount\n  )\n    internal\n  {\n    // optional override\n  }\n\n  /**\n   * @dev Source of tokens. Override this method to modify the way in which the crowdsale ultimately gets and sends its tokens.\n   * @param _beneficiary Address performing the token purchase\n   * @param _tokenAmount Number of tokens to be emitted\n   */\n  function _deliverTokens(\n    address _beneficiary,\n    uint256 _tokenAmount\n  )\n    internal\n  {\n    token.safeTransfer(_beneficiary, _tokenAmount);\n  }\n\n  /**\n   * @dev Executed when a purchase has been validated and is ready to be executed. Not necessarily emits/sends tokens.\n   * @param _beneficiary Address receiving the tokens\n   * @param _tokenAmount Number of tokens to be purchased\n   */\n  function _processPurchase(\n    address _beneficiary,\n    uint256 _tokenAmount\n  )\n    internal\n  {\n    _deliverTokens(_beneficiary, _tokenAmount);\n  }\n\n  /**\n   * @dev Override for extensions that require an internal state to check for validity (current user contributions, etc.)\n   * @param _beneficiary Address receiving the tokens\n   * @param _weiAmount Value in wei involved in the purchase\n   */\n  function _updatePurchasingState(\n    address _beneficiary,\n    uint256 _weiAmount\n  )\n    internal\n  {\n    // optional override\n  }\n\n  /**\n   * @dev Override to extend the way in which ether is converted to tokens.\n   * @param _weiAmount Value in wei to be converted into tokens\n   * @return Number of tokens that can be purchased with the specified _weiAmount\n   */\n  function _getTokenAmount(uint256 _weiAmount)\n    internal view returns (uint256)\n  {\n    return _weiAmount.mul(rate);\n  }\n\n  /**\n   * @dev Determines how ETH is stored/forwarded on purchases.\n   */\n  function _forwardFunds() internal {\n    wallet.transfer(msg.value);\n  }\n}\n",
  "sourcePath": "zeppelin-solidity\\contracts\\crowdsale\\Crowdsale.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/crowdsale/Crowdsale.sol",
    "exportedSymbols": {
      "Crowdsale": [
        332
      ]
    },
    "id": 333,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 106,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "../token/ERC20/ERC20.sol",
        "id": 107,
        "nodeType": "ImportDirective",
        "scope": 333,
        "sourceUnit": 766,
        "src": "26:34:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 108,
        "nodeType": "ImportDirective",
        "scope": 333,
        "sourceUnit": 541,
        "src": "61:30:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
        "file": "../token/ERC20/SafeERC20.sol",
        "id": 109,
        "nodeType": "ImportDirective",
        "scope": 333,
        "sourceUnit": 966,
        "src": "92:38:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Crowdsale\n@dev Crowdsale is a base contract for managing a token crowdsale,\nallowing investors to purchase tokens with ether. This contract implements\nsuch functionality in its most fundamental form and can be extended to provide additional\nfunctionality and/or custom behavior.\nThe external interface represents the basic interface for purchasing tokens, and conform\nthe base architecture for crowdsales. They are *not* intended to be modified / overridden.\nThe internal interface conforms the extensible and modifiable surface of crowdsales. Override\nthe methods to add functionality. Consider using 'super' where appropriate to concatenate\nbehavior.",
        "fullyImplemented": true,
        "id": 332,
        "linearizedBaseContracts": [
          332
        ],
        "name": "Crowdsale",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 112,
            "libraryName": {
              "contractScope": null,
              "id": 110,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 540,
              "src": "860:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$540",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "854:27:3",
            "typeName": {
              "id": 111,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "873:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 115,
            "libraryName": {
              "contractScope": null,
              "id": 113,
              "name": "SafeERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 965,
              "src": "890:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeERC20_$965",
                "typeString": "library SafeERC20"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "884:26:3",
            "typeName": {
              "contractScope": null,
              "id": 114,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 765,
              "src": "904:5:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$765",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "constant": false,
            "id": 117,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 332,
            "src": "940:18:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20_$765",
              "typeString": "contract ERC20"
            },
            "typeName": {
              "contractScope": null,
              "id": 116,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 765,
              "src": "940:5:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$765",
                "typeString": "contract ERC20"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 119,
            "name": "wallet",
            "nodeType": "VariableDeclaration",
            "scope": 332,
            "src": "1002:21:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 118,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1002:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 121,
            "name": "rate",
            "nodeType": "VariableDeclaration",
            "scope": 332,
            "src": "1304:19:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 120,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1304:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 123,
            "name": "weiRaised",
            "nodeType": "VariableDeclaration",
            "scope": 332,
            "src": "1354:24:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 122,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1354:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "Event for token purchase logging\n@param purchaser who paid for the tokens\n@param beneficiary who got the tokens\n@param value weis paid for purchase\n@param amount amount of tokens purchased",
            "id": 133,
            "name": "TokenPurchase",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125,
                  "indexed": true,
                  "name": "purchaser",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1634:25:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1634:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 127,
                  "indexed": true,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1665:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1665:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 129,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1698:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1698:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 131,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1717:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1717:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1628:107:3"
            },
            "src": "1609:127:3"
          },
          {
            "body": {
              "id": 176,
              "nodeType": "Block",
              "src": "2000:161:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 143,
                          "name": "_rate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 135,
                          "src": "2014:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2022:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2014:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 142,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "2006:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2006:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 147,
                  "nodeType": "ExpressionStatement",
                  "src": "2006:18:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 149,
                          "name": "_wallet",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 137,
                          "src": "2038:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 151,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2057:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 150,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2049:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2049:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2038:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 148,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "2030:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2030:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "2030:30:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 157,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 139,
                          "src": "2074:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$765",
                            "typeString": "contract ERC20"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 159,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2092:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2084:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 160,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2084:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2074:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 156,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "2066:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2066:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "2066:29:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 164,
                      "name": "rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121,
                      "src": "2102:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 165,
                      "name": "_rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 135,
                      "src": "2109:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2102:12:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 167,
                  "nodeType": "ExpressionStatement",
                  "src": "2102:12:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 168,
                      "name": "wallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "2120:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 169,
                      "name": "_wallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 137,
                      "src": "2129:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2120:16:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 171,
                  "nodeType": "ExpressionStatement",
                  "src": "2120:16:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 172,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 117,
                      "src": "2142:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$765",
                        "typeString": "contract ERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 173,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 139,
                      "src": "2150:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$765",
                        "typeString": "contract ERC20"
                      }
                    },
                    "src": "2142:14:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$765",
                      "typeString": "contract ERC20"
                    }
                  },
                  "id": 175,
                  "nodeType": "ExpressionStatement",
                  "src": "2142:14:3"
                }
              ]
            },
            "documentation": "@param _rate Number of token units a buyer gets per wei\n@param _wallet Address where collected funds will be forwarded to\n@param _token Address of the token being sold",
            "id": 177,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 135,
                  "name": "_rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "1947:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1947:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 137,
                  "name": "_wallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "1962:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 136,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1962:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 139,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "1979:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$765",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 138,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 765,
                    "src": "1979:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$765",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1946:46:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 141,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2000:0:3"
            },
            "scope": 332,
            "src": "1935:226:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 185,
              "nodeType": "Block",
              "src": "2385:32:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 181,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1227,
                          "src": "2401:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2401:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 180,
                      "name": "buyTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 241,
                      "src": "2391:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2391:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 184,
                  "nodeType": "ExpressionStatement",
                  "src": "2391:21:3"
                }
              ]
            },
            "documentation": "@dev fallback function ***DO NOT OVERRIDE***",
            "id": 186,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 178,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2365:2:3"
            },
            "payable": true,
            "returnParameters": {
              "id": 179,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2385:0:3"
            },
            "scope": 332,
            "src": "2356:61:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 240,
              "nodeType": "Block",
              "src": "2609:521:3",
              "statements": [
                {
                  "assignments": [
                    192
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 192,
                      "name": "weiAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 241,
                      "src": "2616:17:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 191,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2616:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 195,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 193,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1227,
                      "src": "2636:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2636:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2616:29:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 197,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2672:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 198,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "2686:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 196,
                      "name": "_preValidatePurchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 263,
                      "src": "2651:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2651:45:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 200,
                  "nodeType": "ExpressionStatement",
                  "src": "2651:45:3"
                },
                {
                  "assignments": [
                    202
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 202,
                      "name": "tokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 241,
                      "src": "2747:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 201,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2747:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 206,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 204,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "2780:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 203,
                      "name": "_getTokenAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 320,
                      "src": "2764:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2764:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2747:43:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 207,
                      "name": "weiRaised",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 123,
                      "src": "2817:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 210,
                          "name": "weiAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 192,
                          "src": "2843:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 208,
                          "name": "weiRaised",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 123,
                          "src": "2829:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 539,
                        "src": "2829:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2829:24:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2817:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 213,
                  "nodeType": "ExpressionStatement",
                  "src": "2817:36:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 215,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2877:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 216,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 202,
                        "src": "2891:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 214,
                      "name": "_processPurchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 299,
                      "src": "2860:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2860:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 218,
                  "nodeType": "ExpressionStatement",
                  "src": "2860:38:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1227,
                          "src": "2930:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 221,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2930:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 222,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2948:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "2968:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 224,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 202,
                        "src": "2985:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 219,
                      "name": "TokenPurchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 133,
                      "src": "2909:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2909:88:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 226,
                  "nodeType": "EmitStatement",
                  "src": "2904:93:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 228,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "3027:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 229,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "3041:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 227,
                      "name": "_updatePurchasingState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 307,
                      "src": "3004:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 230,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3004:47:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 231,
                  "nodeType": "ExpressionStatement",
                  "src": "3004:47:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 232,
                      "name": "_forwardFunds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 331,
                      "src": "3058:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 233,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3058:15:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 234,
                  "nodeType": "ExpressionStatement",
                  "src": "3058:15:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 236,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "3101:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 237,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "3115:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 235,
                      "name": "_postValidatePurchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 271,
                      "src": "3079:21:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3079:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 239,
                  "nodeType": "ExpressionStatement",
                  "src": "3079:46:3"
                }
              ]
            },
            "documentation": "@dev low level token purchase ***DO NOT OVERRIDE***\n@param _beneficiary Address performing the token purchase",
            "id": 241,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "buyTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 188,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 241,
                  "src": "2572:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2572:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2571:22:3"
            },
            "payable": true,
            "returnParameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2609:0:3"
            },
            "scope": 332,
            "src": "2553:577:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 262,
              "nodeType": "Block",
              "src": "3878:76:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 253,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 249,
                          "name": "_beneficiary",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 243,
                          "src": "3892:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 251,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3916:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 250,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3908:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3908:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3892:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 248,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "3884:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3884:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 255,
                  "nodeType": "ExpressionStatement",
                  "src": "3884:35:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 259,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 257,
                          "name": "_weiAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 245,
                          "src": "3933:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3947:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3933:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 256,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "3925:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3925:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 261,
                  "nodeType": "ExpressionStatement",
                  "src": "3925:24:3"
                }
              ]
            },
            "documentation": "@dev Validation of an incoming purchase. Use require statements to revert state when conditions are not met. Use `super` in contracts that inherit from Crowdsale to extend their validations.\nExample from CappedCrowdsale.sol's _preValidatePurchase method: \n  super._preValidatePurchase(_beneficiary, _weiAmount);\n  require(weiRaised.add(_weiAmount) <= cap);\n@param _beneficiary Address performing the token purchase\n@param _weiAmount Value in wei involved in the purchase",
            "id": 263,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_preValidatePurchase",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 243,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "3814:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 242,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3814:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 245,
                  "name": "_weiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "3840:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 244,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3840:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3808:54:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 247,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3878:0:3"
            },
            "scope": 332,
            "src": "3779:175:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 270,
              "nodeType": "Block",
              "src": "4332:30:3",
              "statements": []
            },
            "documentation": "@dev Validation of an executed purchase. Observe state and use revert statements to undo rollback when valid conditions are not met.\n@param _beneficiary Address performing the token purchase\n@param _weiAmount Value in wei involved in the purchase",
            "id": 271,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_postValidatePurchase",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 268,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 265,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 271,
                  "src": "4268:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4268:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 267,
                  "name": "_weiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 271,
                  "src": "4294:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 266,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4294:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4262:54:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 269,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4332:0:3"
            },
            "scope": 332,
            "src": "4232:130:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 285,
              "nodeType": "Block",
              "src": "4720:57:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 281,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 273,
                        "src": "4745:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 282,
                        "name": "_tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 275,
                        "src": "4759:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 278,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117,
                        "src": "4726:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$765",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 925,
                      "src": "4726:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20Basic_$797_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_ERC20Basic_$797_$",
                        "typeString": "function (contract ERC20Basic,address,uint256)"
                      }
                    },
                    "id": 283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4726:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 284,
                  "nodeType": "ExpressionStatement",
                  "src": "4726:46:3"
                }
              ]
            },
            "documentation": "@dev Source of tokens. Override this method to modify the way in which the crowdsale ultimately gets and sends its tokens.\n@param _beneficiary Address performing the token purchase\n@param _tokenAmount Number of tokens to be emitted",
            "id": 286,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_deliverTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 273,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 286,
                  "src": "4654:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4654:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 275,
                  "name": "_tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 286,
                  "src": "4680:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 274,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4680:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4648:56:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 277,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4720:0:3"
            },
            "scope": 332,
            "src": "4625:152:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 298,
              "nodeType": "Block",
              "src": "5121:53:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 294,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 288,
                        "src": "5142:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 295,
                        "name": "_tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 290,
                        "src": "5156:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 293,
                      "name": "_deliverTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 286,
                      "src": "5127:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 296,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5127:42:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 297,
                  "nodeType": "ExpressionStatement",
                  "src": "5127:42:3"
                }
              ]
            },
            "documentation": "@dev Executed when a purchase has been validated and is ready to be executed. Not necessarily emits/sends tokens.\n@param _beneficiary Address receiving the tokens\n@param _tokenAmount Number of tokens to be purchased",
            "id": 299,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_processPurchase",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 291,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 288,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "5055:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 287,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5055:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 290,
                  "name": "_tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "5081:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 289,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5081:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5049:56:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 292,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5121:0:3"
            },
            "scope": 332,
            "src": "5024:150:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 306,
              "nodeType": "Block",
              "src": "5528:30:3",
              "statements": []
            },
            "documentation": "@dev Override for extensions that require an internal state to check for validity (current user contributions, etc.)\n@param _beneficiary Address receiving the tokens\n@param _weiAmount Value in wei involved in the purchase",
            "id": 307,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_updatePurchasingState",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 301,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 307,
                  "src": "5464:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 300,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5464:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 303,
                  "name": "_weiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 307,
                  "src": "5490:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 302,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5490:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5458:54:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 305,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5528:0:3"
            },
            "scope": 332,
            "src": "5427:131:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 319,
              "nodeType": "Block",
              "src": "5879:38:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 316,
                        "name": "rate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "5907:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 314,
                        "name": "_weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 309,
                        "src": "5892:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 315,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 481,
                      "src": "5892:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5892:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 313,
                  "id": 318,
                  "nodeType": "Return",
                  "src": "5885:27:3"
                }
              ]
            },
            "documentation": "@dev Override to extend the way in which ether is converted to tokens.\n@param _weiAmount Value in wei to be converted into tokens\n@return Number of tokens that can be purchased with the specified _weiAmount",
            "id": 320,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_getTokenAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 309,
                  "name": "_weiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 320,
                  "src": "5821:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 308,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5821:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5820:20:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 312,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 320,
                  "src": "5868:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 311,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5868:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5867:9:3"
            },
            "scope": 332,
            "src": "5796:121:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 330,
              "nodeType": "Block",
              "src": "6030:37:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 326,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1227,
                          "src": "6052:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 327,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6052:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 323,
                        "name": "wallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119,
                        "src": "6036:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 325,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6036:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6036:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 329,
                  "nodeType": "ExpressionStatement",
                  "src": "6036:26:3"
                }
              ]
            },
            "documentation": "@dev Determines how ETH is stored/forwarded on purchases.",
            "id": 331,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_forwardFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 321,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6018:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 322,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6030:0:3"
            },
            "scope": 332,
            "src": "5996:71:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 333,
        "src": "831:5238:3"
      }
    ],
    "src": "0:6070:3"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/crowdsale/Crowdsale.sol",
    "exportedSymbols": {
      "Crowdsale": [
        332
      ]
    },
    "id": 333,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 106,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "../token/ERC20/ERC20.sol",
        "id": 107,
        "nodeType": "ImportDirective",
        "scope": 333,
        "sourceUnit": 766,
        "src": "26:34:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 108,
        "nodeType": "ImportDirective",
        "scope": 333,
        "sourceUnit": 541,
        "src": "61:30:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
        "file": "../token/ERC20/SafeERC20.sol",
        "id": 109,
        "nodeType": "ImportDirective",
        "scope": 333,
        "sourceUnit": 966,
        "src": "92:38:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Crowdsale\n@dev Crowdsale is a base contract for managing a token crowdsale,\nallowing investors to purchase tokens with ether. This contract implements\nsuch functionality in its most fundamental form and can be extended to provide additional\nfunctionality and/or custom behavior.\nThe external interface represents the basic interface for purchasing tokens, and conform\nthe base architecture for crowdsales. They are *not* intended to be modified / overridden.\nThe internal interface conforms the extensible and modifiable surface of crowdsales. Override\nthe methods to add functionality. Consider using 'super' where appropriate to concatenate\nbehavior.",
        "fullyImplemented": true,
        "id": 332,
        "linearizedBaseContracts": [
          332
        ],
        "name": "Crowdsale",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 112,
            "libraryName": {
              "contractScope": null,
              "id": 110,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 540,
              "src": "860:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$540",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "854:27:3",
            "typeName": {
              "id": 111,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "873:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 115,
            "libraryName": {
              "contractScope": null,
              "id": 113,
              "name": "SafeERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 965,
              "src": "890:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeERC20_$965",
                "typeString": "library SafeERC20"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "884:26:3",
            "typeName": {
              "contractScope": null,
              "id": 114,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 765,
              "src": "904:5:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$765",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "constant": false,
            "id": 117,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 332,
            "src": "940:18:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20_$765",
              "typeString": "contract ERC20"
            },
            "typeName": {
              "contractScope": null,
              "id": 116,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 765,
              "src": "940:5:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$765",
                "typeString": "contract ERC20"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 119,
            "name": "wallet",
            "nodeType": "VariableDeclaration",
            "scope": 332,
            "src": "1002:21:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 118,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1002:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 121,
            "name": "rate",
            "nodeType": "VariableDeclaration",
            "scope": 332,
            "src": "1304:19:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 120,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1304:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 123,
            "name": "weiRaised",
            "nodeType": "VariableDeclaration",
            "scope": 332,
            "src": "1354:24:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 122,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1354:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "Event for token purchase logging\n@param purchaser who paid for the tokens\n@param beneficiary who got the tokens\n@param value weis paid for purchase\n@param amount amount of tokens purchased",
            "id": 133,
            "name": "TokenPurchase",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125,
                  "indexed": true,
                  "name": "purchaser",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1634:25:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1634:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 127,
                  "indexed": true,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1665:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1665:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 129,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1698:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1698:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 131,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1717:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1717:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1628:107:3"
            },
            "src": "1609:127:3"
          },
          {
            "body": {
              "id": 176,
              "nodeType": "Block",
              "src": "2000:161:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 143,
                          "name": "_rate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 135,
                          "src": "2014:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2022:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2014:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 142,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "2006:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2006:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 147,
                  "nodeType": "ExpressionStatement",
                  "src": "2006:18:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 149,
                          "name": "_wallet",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 137,
                          "src": "2038:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 151,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2057:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 150,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2049:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2049:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2038:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 148,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "2030:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2030:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "2030:30:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 157,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 139,
                          "src": "2074:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$765",
                            "typeString": "contract ERC20"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 159,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2092:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2084:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 160,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2084:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2074:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 156,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "2066:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2066:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "2066:29:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 164,
                      "name": "rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121,
                      "src": "2102:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 165,
                      "name": "_rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 135,
                      "src": "2109:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2102:12:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 167,
                  "nodeType": "ExpressionStatement",
                  "src": "2102:12:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 168,
                      "name": "wallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "2120:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 169,
                      "name": "_wallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 137,
                      "src": "2129:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2120:16:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 171,
                  "nodeType": "ExpressionStatement",
                  "src": "2120:16:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 172,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 117,
                      "src": "2142:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$765",
                        "typeString": "contract ERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 173,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 139,
                      "src": "2150:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$765",
                        "typeString": "contract ERC20"
                      }
                    },
                    "src": "2142:14:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$765",
                      "typeString": "contract ERC20"
                    }
                  },
                  "id": 175,
                  "nodeType": "ExpressionStatement",
                  "src": "2142:14:3"
                }
              ]
            },
            "documentation": "@param _rate Number of token units a buyer gets per wei\n@param _wallet Address where collected funds will be forwarded to\n@param _token Address of the token being sold",
            "id": 177,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 135,
                  "name": "_rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "1947:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1947:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 137,
                  "name": "_wallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "1962:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 136,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1962:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 139,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "1979:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$765",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 138,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 765,
                    "src": "1979:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$765",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1946:46:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 141,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2000:0:3"
            },
            "scope": 332,
            "src": "1935:226:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 185,
              "nodeType": "Block",
              "src": "2385:32:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 181,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1227,
                          "src": "2401:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2401:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 180,
                      "name": "buyTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 241,
                      "src": "2391:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2391:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 184,
                  "nodeType": "ExpressionStatement",
                  "src": "2391:21:3"
                }
              ]
            },
            "documentation": "@dev fallback function ***DO NOT OVERRIDE***",
            "id": 186,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 178,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2365:2:3"
            },
            "payable": true,
            "returnParameters": {
              "id": 179,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2385:0:3"
            },
            "scope": 332,
            "src": "2356:61:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 240,
              "nodeType": "Block",
              "src": "2609:521:3",
              "statements": [
                {
                  "assignments": [
                    192
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 192,
                      "name": "weiAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 241,
                      "src": "2616:17:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 191,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2616:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 195,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 193,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1227,
                      "src": "2636:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2636:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2616:29:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 197,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2672:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 198,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "2686:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 196,
                      "name": "_preValidatePurchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 263,
                      "src": "2651:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2651:45:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 200,
                  "nodeType": "ExpressionStatement",
                  "src": "2651:45:3"
                },
                {
                  "assignments": [
                    202
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 202,
                      "name": "tokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 241,
                      "src": "2747:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 201,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2747:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 206,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 204,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "2780:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 203,
                      "name": "_getTokenAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 320,
                      "src": "2764:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2764:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2747:43:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 207,
                      "name": "weiRaised",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 123,
                      "src": "2817:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 210,
                          "name": "weiAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 192,
                          "src": "2843:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 208,
                          "name": "weiRaised",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 123,
                          "src": "2829:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 539,
                        "src": "2829:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2829:24:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2817:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 213,
                  "nodeType": "ExpressionStatement",
                  "src": "2817:36:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 215,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2877:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 216,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 202,
                        "src": "2891:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 214,
                      "name": "_processPurchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 299,
                      "src": "2860:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2860:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 218,
                  "nodeType": "ExpressionStatement",
                  "src": "2860:38:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1227,
                          "src": "2930:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 221,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2930:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 222,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2948:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "2968:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 224,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 202,
                        "src": "2985:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 219,
                      "name": "TokenPurchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 133,
                      "src": "2909:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2909:88:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 226,
                  "nodeType": "EmitStatement",
                  "src": "2904:93:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 228,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "3027:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 229,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "3041:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 227,
                      "name": "_updatePurchasingState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 307,
                      "src": "3004:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 230,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3004:47:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 231,
                  "nodeType": "ExpressionStatement",
                  "src": "3004:47:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 232,
                      "name": "_forwardFunds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 331,
                      "src": "3058:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 233,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3058:15:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 234,
                  "nodeType": "ExpressionStatement",
                  "src": "3058:15:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 236,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "3101:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 237,
                        "name": "weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "3115:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 235,
                      "name": "_postValidatePurchase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 271,
                      "src": "3079:21:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3079:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 239,
                  "nodeType": "ExpressionStatement",
                  "src": "3079:46:3"
                }
              ]
            },
            "documentation": "@dev low level token purchase ***DO NOT OVERRIDE***\n@param _beneficiary Address performing the token purchase",
            "id": 241,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "buyTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 188,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 241,
                  "src": "2572:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2572:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2571:22:3"
            },
            "payable": true,
            "returnParameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2609:0:3"
            },
            "scope": 332,
            "src": "2553:577:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 262,
              "nodeType": "Block",
              "src": "3878:76:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 253,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 249,
                          "name": "_beneficiary",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 243,
                          "src": "3892:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 251,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3916:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 250,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3908:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3908:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3892:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 248,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "3884:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3884:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 255,
                  "nodeType": "ExpressionStatement",
                  "src": "3884:35:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 259,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 257,
                          "name": "_weiAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 245,
                          "src": "3933:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3947:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3933:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 256,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1230,
                        1231
                      ],
                      "referencedDeclaration": 1230,
                      "src": "3925:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3925:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 261,
                  "nodeType": "ExpressionStatement",
                  "src": "3925:24:3"
                }
              ]
            },
            "documentation": "@dev Validation of an incoming purchase. Use require statements to revert state when conditions are not met. Use `super` in contracts that inherit from Crowdsale to extend their validations.\nExample from CappedCrowdsale.sol's _preValidatePurchase method: \n  super._preValidatePurchase(_beneficiary, _weiAmount);\n  require(weiRaised.add(_weiAmount) <= cap);\n@param _beneficiary Address performing the token purchase\n@param _weiAmount Value in wei involved in the purchase",
            "id": 263,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_preValidatePurchase",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 243,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "3814:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 242,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3814:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 245,
                  "name": "_weiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "3840:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 244,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3840:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3808:54:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 247,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3878:0:3"
            },
            "scope": 332,
            "src": "3779:175:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 270,
              "nodeType": "Block",
              "src": "4332:30:3",
              "statements": []
            },
            "documentation": "@dev Validation of an executed purchase. Observe state and use revert statements to undo rollback when valid conditions are not met.\n@param _beneficiary Address performing the token purchase\n@param _weiAmount Value in wei involved in the purchase",
            "id": 271,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_postValidatePurchase",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 268,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 265,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 271,
                  "src": "4268:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4268:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 267,
                  "name": "_weiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 271,
                  "src": "4294:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 266,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4294:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4262:54:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 269,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4332:0:3"
            },
            "scope": 332,
            "src": "4232:130:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 285,
              "nodeType": "Block",
              "src": "4720:57:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 281,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 273,
                        "src": "4745:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 282,
                        "name": "_tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 275,
                        "src": "4759:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 278,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117,
                        "src": "4726:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$765",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 925,
                      "src": "4726:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20Basic_$797_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_ERC20Basic_$797_$",
                        "typeString": "function (contract ERC20Basic,address,uint256)"
                      }
                    },
                    "id": 283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4726:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 284,
                  "nodeType": "ExpressionStatement",
                  "src": "4726:46:3"
                }
              ]
            },
            "documentation": "@dev Source of tokens. Override this method to modify the way in which the crowdsale ultimately gets and sends its tokens.\n@param _beneficiary Address performing the token purchase\n@param _tokenAmount Number of tokens to be emitted",
            "id": 286,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_deliverTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 273,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 286,
                  "src": "4654:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4654:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 275,
                  "name": "_tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 286,
                  "src": "4680:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 274,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4680:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4648:56:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 277,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4720:0:3"
            },
            "scope": 332,
            "src": "4625:152:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 298,
              "nodeType": "Block",
              "src": "5121:53:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 294,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 288,
                        "src": "5142:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 295,
                        "name": "_tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 290,
                        "src": "5156:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 293,
                      "name": "_deliverTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 286,
                      "src": "5127:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 296,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5127:42:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 297,
                  "nodeType": "ExpressionStatement",
                  "src": "5127:42:3"
                }
              ]
            },
            "documentation": "@dev Executed when a purchase has been validated and is ready to be executed. Not necessarily emits/sends tokens.\n@param _beneficiary Address receiving the tokens\n@param _tokenAmount Number of tokens to be purchased",
            "id": 299,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_processPurchase",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 291,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 288,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "5055:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 287,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5055:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 290,
                  "name": "_tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "5081:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 289,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5081:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5049:56:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 292,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5121:0:3"
            },
            "scope": 332,
            "src": "5024:150:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 306,
              "nodeType": "Block",
              "src": "5528:30:3",
              "statements": []
            },
            "documentation": "@dev Override for extensions that require an internal state to check for validity (current user contributions, etc.)\n@param _beneficiary Address receiving the tokens\n@param _weiAmount Value in wei involved in the purchase",
            "id": 307,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_updatePurchasingState",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 301,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 307,
                  "src": "5464:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 300,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5464:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 303,
                  "name": "_weiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 307,
                  "src": "5490:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 302,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5490:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5458:54:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 305,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5528:0:3"
            },
            "scope": 332,
            "src": "5427:131:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 319,
              "nodeType": "Block",
              "src": "5879:38:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 316,
                        "name": "rate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "5907:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 314,
                        "name": "_weiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 309,
                        "src": "5892:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 315,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 481,
                      "src": "5892:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5892:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 313,
                  "id": 318,
                  "nodeType": "Return",
                  "src": "5885:27:3"
                }
              ]
            },
            "documentation": "@dev Override to extend the way in which ether is converted to tokens.\n@param _weiAmount Value in wei to be converted into tokens\n@return Number of tokens that can be purchased with the specified _weiAmount",
            "id": 320,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_getTokenAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 309,
                  "name": "_weiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 320,
                  "src": "5821:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 308,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5821:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5820:20:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 312,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 320,
                  "src": "5868:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 311,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5868:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5867:9:3"
            },
            "scope": 332,
            "src": "5796:121:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 330,
              "nodeType": "Block",
              "src": "6030:37:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 326,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1227,
                          "src": "6052:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 327,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6052:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 323,
                        "name": "wallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119,
                        "src": "6036:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 325,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6036:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6036:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 329,
                  "nodeType": "ExpressionStatement",
                  "src": "6036:26:3"
                }
              ]
            },
            "documentation": "@dev Determines how ETH is stored/forwarded on purchases.",
            "id": 331,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_forwardFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 321,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6018:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 322,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6030:0:3"
            },
            "scope": 332,
            "src": "5996:71:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 333,
        "src": "831:5238:3"
      }
    ],
    "src": "0:6070:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-08-21T04:45:24.913Z"
}

module.exports = Crowdsale;