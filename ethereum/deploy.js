  
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/ShopFactory.json');

const provider = new HDWalletProvider(
  'reason pair crew pledge toy water trigger enrich orbit worry slice other',
  'https://rinkeby.infura.io/v3/42d235c7d6304509a63bec8b043c9bc2'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data : compiledFactory.bytecode })
    .send({from: accounts[0], gas: '4700000' });

  console.log('Contract deployed to', result.options.address);
};
deploy();
