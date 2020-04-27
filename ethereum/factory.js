const web3 = require('./web3');
const ShopFactory = require('./build/ShopFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(ShopFactory.interface),
  '0xD05067207ABF4E792Aa02971869Fd01A155e97bd'
);


module.exports = instance;