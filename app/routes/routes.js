var price = require('../controllers/price.js'),
  quantity = require('../controllers/quantity.js');

module.exports = function(app) {
  app.get('/price', price.request);

  app.get('/quantity', quantity.request);
};
