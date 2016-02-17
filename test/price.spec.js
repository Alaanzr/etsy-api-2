describe('PriceCtrl', function() {

  var priceCtrl = require('../app/controllers/price.js');
  var mockData = require('./mockData.js');

  describe('averagePrice function', function() {
    it('returns the average price for listed items', function() {
      expect(averagePrice(mockData)).toEqual(84);
    });
  });

});
