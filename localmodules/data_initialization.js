const factory = require('../ethereum/factory');
const web3 = require('../ethereum/web3');
const { detailList } = require('../../Database/data_file.json')

const saveToEthereum = async (obj) => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts, obj);
  await factory.methods
    .createShop(obj.managerName, obj.rice, obj.wheat, obj.arhad, obj.kerosene, obj.fpdName, obj.shopName, obj.addr)
    .send({
      from: accounts[0],
    });
}



const manualSaveToEthereum = async () => {
  console.log('This is saving multiples...');
  console.log(detailList.length);
  const accounts = await web3.eth.getAccounts();
  for(let i=0;i<detailList.length;i++){
    obj = detailList[i]
    obj.addr = obj.addr + ", Tumakuru, Karnataka - 572103";
    await factory.methods
      .createShop(obj.managerName, obj.rice, obj.wheat, obj.arhad, obj.kerosene, obj.fpdName, obj.shopName, obj.addr, "TUMAKURU")
      .send({
        from: accounts[0],
      });
  }
}









module.exports = { saveToEthereum, manualSaveToEthereum };