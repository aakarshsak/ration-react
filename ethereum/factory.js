const web3 = require('./web3');
const ShopFactory = require('./build/ShopFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(ShopFactory.interface),
  '0x95C79efB891EDf04255c5783c475F7F8EDeb8f0b'
);


module.exports = instance;