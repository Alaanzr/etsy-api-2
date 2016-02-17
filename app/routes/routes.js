var price = require('../controllers/price.js');

module.exports = function(app) {
  app.get('/price', price.request);
};
