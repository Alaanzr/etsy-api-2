describe('MaterialCtrl', function() {

  var materialCtrl = require('../app/controllers/materials.js');
  var mockData = require('./mockData.js');
  var item1 = mockData[0],
    item2 = mockData[1],
    item3 = mockData[2];
  var tags = [{
    "fabric label": 3
  }, {
    "minky": 3
  }, {
    "thread": 3
  }, {
    "tumbler": 3
  }, {
    "cup": 3
  }];

  describe('commonMaterials function', function() {
    it('identifies the 5 most common materials', function() {
      expect(materialCtrl.commonMaterials(mockData)).toEqual(tags);
    });
  });

  describe('commonMaterialListings function', function() {
    it('retrieves listings that contain the 5 most common materials', function() {
      expect(materialCtrl.commonMaterialListings(mockData)).toEqual([item1, item2, item3]);
    });
  });
});
