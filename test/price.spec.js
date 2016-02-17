describe('PriceCtrl', function() {

  var priceCtrl = require('../app/controllers/price.js');
  var mockData = require('./mockData.js');

  describe('averagePrice function', function() {
    it('returns the average price for listed items', function() {
      expect(averagePrice(mockData)).toEqual(84);
    });
  });

  describe('highestPricedListing function', function() {
    it('returns the listing with the highest price', function() {
      expect(highestPricedListing(mockData)).toEqual(mockData[1]);
    });
  });

  describe('lowestPriced Listing function', function() {
    it('returns the listing with the lowest price', function() {
      expect(lowestPricedListing(mockData)).toEqual(mockData[0]);
    });
  });

});
