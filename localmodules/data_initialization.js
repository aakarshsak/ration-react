const csv = require('csv-parser');
const fs = require('fs-extra');
const factory = require('../ethereum/factory');
const web3 = require('../ethereum/web3');

const SHOP_NUMBER = 'Shop Number';
const SHOP_NAME = 'Shop Name';
const ADDRESS = 'Address';
const MANAGER_NAME = 'Manager Name';
const RICE_STOCK = 'Rice Stock Available';
const WHEAT_STOCK = 'Wheat Stock Available';
const KEROSENE_STOCK = 'Kerosene Stock Available';
const DAL_STOCK = 'Dal Stock Available';
const RICE_PRICE = 'Rice Price';
const WHEAT_PRICE = 'Wheat Price';
const KEROSENE_PRICE = 'Kerosene Price';
const DAL_PRICE = 'Dal Price';

function saveToEthereum() {

  fs.createReadStream('tmk2.csv')
  .pipe(csv())
  .on('data', async (row) => {
    let accounts = await web3.eth.getAccounts();
    await factory.methods
      .createShop(row[MANAGER_NAME], row[RICE_STOCK], row[WHEAT_STOCK], row[DAL_STOCK], row[SHOP_NUMBER], row[SHOP_NAME], row[ADDRESS])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
  })
  .on('end', () => {
    console.log('Saved To Blockchain');    
  });

}

saveToEthereum();