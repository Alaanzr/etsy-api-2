describe('QuantityCtrl', function() {

  var quantityCtrl = require('../app/controllers/quantity.js');
  var mockData = require('./mockData.js');
  var item1 = mockData[0],
    item2 = mockData[1],
    item3 = mockData[2];

  describe('averageQuantity function', function() {
    it('returns the average quantity for listed items', function() {
      expect(quantityCtrl.averageQuantity(mockData)).toEqual(4);
    });
  });

  describe('highestQuantityListing function', function() {
    it('returns the listing with the highest price', function() {
      expect(quantityCtrl.highestQuantityListing(mockData)).toEqual(item3);
    });
  });

  describe('lowestQuantityListing function', function() {
    it('returns the listing with the lowest quantity', function() {
      expect(quantityCtrl.lowestQuantityListing(mockData)).toEqual(item2);
    });
  });

});
