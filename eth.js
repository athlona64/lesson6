const bip39 = require('bip39');
const ethers = require('ethers');
const Web3 = require('web3');


var provider = ethers.providers.getDefaultProvider('kovan');





let mnemonic = "car satoshi acquire heart solar voice chalk mechanic dog anxiety sunny cream";
let hdPath = "m/44'/60'/0'/0/0";
let walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic ,hdPath)
console.log(walletMnemonic.privateKey);
let wallet = new ethers.Wallet(walletMnemonic.privateKey, provider)

wallet.getBalance().then(data =>{
	console.log(data/10e17);
});
let abi = [ { "constant": false, "inputs": [ { "name": "_number", "type": "uint256" } ], "name": "inputNumber", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "caller", "type": "address" }, { "indexed": false, "name": "_number", "type": "uint256" } ], "name": "InputNumber", "type": "event" }, { "constant": true, "inputs": [], "name": "number", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ];

let contractAddr = "0x17920e609a0537Be9fd62b85D92DD757424074be";



let contract = new ethers.Contract(contractAddr, abi, wallet);

let callOwner = contract.inputNumber("222");
callOwner.then(data=> {
	console.log(data);
});




// contract.on("InputNumber", (from, value, event) => {

//     console.log(from,value);

//     console.log(event.blockNumber);

// });