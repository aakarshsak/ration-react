const web3 = require('./web3');
const ShopFactory = require('./build/ShopFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(ShopFactory.interface),
  '0x77F38076771be7f5E94596e24F97caf34E9fBEA6'
);


module.exports = instance;