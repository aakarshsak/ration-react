const routes = require('next-routes')();

routes
//.add('/update', '/update')
.add('/:headerToken', '/')
.add('/:headerToken/shops/:address', '/shops/show')
.add('/:headerToken/shops/:address/payment', '/shops/payment');

module.exports = routes;