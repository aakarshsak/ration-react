const web3 = require('./web3');
const ShopFactory = require('./build/ShopFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(ShopFactory.interface),
  '0x2a0cb7319b79e33f2cee4a018b2826ec7157dded'
);


module.exports = instance;