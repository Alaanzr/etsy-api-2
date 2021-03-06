var price = require('../controllers/price.js'),
  quantity = require('../controllers/quantity.js'),
  materials = require('../controllers/materials.js'),
  tags = require('../controllers/tags.js');

module.exports = function(app) {
  app.get('/price', price.request);

  app.get('/quantity', quantity.request);

  app.get('/materials', materials.request);

  app.get('/tags', tags.request);
};
