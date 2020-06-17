const bip39 = require('bip39');
const ethers = require('ethers');
const Web3 = require('web3');


var provider = ethers.providers.getDefaultProvider('kovan');

let contractAddr = "0x17920e609a0537Be9fd62b85D92DD757424074be";
let topic = ethers.utils.id("InputNumber(address,uint256)");

let filter = {
    address: contractAddr,
    topics: [ topic ]
}

provider.on(filter, (log) => {
    // console.log(log);
	let abi = [
	    "event InputNumber(address caller, uint _number)"
	];

	let iface = new ethers.utils.Interface(abi)

   	// console.log(iface.parseLog(log).args);
   	let caller = iface.parseLog(log).args.caller;
   	let number = iface.parseLog(log).args._number;

   	console.log("caller is "+ caller);
   	console.log("number change " + number/1);
});
