const Web3 = require('web3');

const func = () => {
  let web3;
  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    console.log(' We are in the browser and metamask is running.');
    web3 = new Web3(ethereum);
    ethereum.enable()
    .then(() => console.log('Enabled Successfully...'))
    
  } else {
    // We are on the server *OR* the user is not running metamask
    console.log('We are on the server *OR* the user is not running metamask')
    const provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/42d235c7d6304509a63bec8b043c9bc2'
    );
    web3 = new Web3(provider);
  }
  return web3;
}


module.exports = func();