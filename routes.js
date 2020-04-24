const routes = require('next-routes')();

routes
.add('/shops/:address', '/shops/show')
.add('/shops/:address/payment', '/shops/payment')
.add('/:headerToken', '/');

module.exports = routes;