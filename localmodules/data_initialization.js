const factory = require('../ethereum/factory');
const web3 = require('../ethereum/web3');

const saveToEthereum = async (obj) => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts, obj);
  await factory.methods
    .createShop(obj.managerName, obj.rice, obj.wheat, obj.arhad, obj.kerosene, obj.fpdName, obj.shopName, obj.addr)
    .send({
      from: accounts[0],
    });
}
module.exports = saveToEthereum;