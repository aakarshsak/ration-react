const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const shopFactory = require('../ethereum/build/ShopFactory.json');
const compiledShop = require('../ethereum/build/Shop.json');

const SHOP_NUMBER = 'Shop Number';
const SHOP_NAME = 'Shop Name';
const ADDRESS = 'Address';
const RICE_STOCK = 'Rice Stock Available';
const WHEAT_STOCK = 'Wheat Stock Available';
const KEROSENE_STOCK = 'Kerosene Stock Available';
const DAL_STOCK = 'Dal Stock Available';
const RICE_PRICE = 'Rice Price';
const WHEAT_PRICE = 'Wheat Price';
const KEROSENE_PRICE = 'Kerosene Price';
const DAL_PRICE = 'Dal Price';


let accounts;
let factory;
let shopAddress;
let shop;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(shopFactory.interface))
    .deploy({ data: shopFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createShop('100', 123, 123, 111, "fpd", "fsf", "addd").send({
    from: accounts[0],
    gas: '1000000'
  });

  [shopAddress] = await factory.methods.getDeployedShops().call();
  shop = await new web3.eth.Contract(
    JSON.parse(compiledShop.interface),
    shopAddress
  );
});

describe('Shops', () => {
  it('deploys a factory and a Shop', () => {
    assert.ok(factory.options.address);
    assert.ok(shop.options.address);
  });

  it('marks caller as the campaign manager', async () => {
    const manager = await shop.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

});