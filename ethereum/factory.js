import web3 from './web3';
import ShopFactory from './build/ShopFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ShopFactory.interface),
  '0x93d8221193a62bdE9aEF5964F13FE65e54BDBfB6'
);

export default instance;