import web3 from './web3';
import Shop from './build/Shop.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Shop.interface), address);
};