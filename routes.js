const routes = require('next-routes')();

routes
//.add('/update', '/update')
.add('/user/details/:headerToken', '/user/details')
.add('/:headerToken', '/')
.add('/:headerToken/shops/:address', '/shops/show')
.add('/:headerToken/shops/record/:address', '/shops/record')
.add('/:headerToken/shops/:transaction/receipt/:address', '/shops/receipt')
// .add('/:headerToken/shops/:address/payment', '/shops/payment')


module.exports = routes;