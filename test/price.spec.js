describe('PriceCtrl', function() {

  var priceCtrl = require('../app/controllers/price.js');
  var mockData = require('./mockData.js');
  var item1 = mockData[0], item2 = mockData[1], item3 = mockData[2];

  describe('averagePrice function', function() {
    it('returns the average price for listed items', function() {
      expect(priceCtrl.averagePrice(mockData)).toEqual(76);
    });
  });

  describe('highestPricedListing function', function() {
    it('returns the listing with the highest price', function() {
      expect(priceCtrl.highestPricedListing(mockData)).toEqual(item2);
    });
  });

  describe('lowestPriced Listing function', function() {
    it('returns the listing with the lowest price', function() {
      expect(priceCtrl.lowestPricedListing(mockData)).toEqual(item1);
    });
  });

});
