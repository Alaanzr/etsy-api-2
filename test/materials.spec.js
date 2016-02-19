describe('MaterialCtrl', function() {

  var materialCtrl = require('../app/controllers/materials.js');
  var mockData = require('./mockData.js');
  var tags = [{
    "designer fabric": 2
  }, {
    "fabric label": 3
  }, {
    "minky": 3
  }, {
    "thread": 3
  }, {
    "tumbler": 3
  }];

  describe('commonMaterials function', function() {
    it('identifies the 5 most common materials', function() {
      expect(materialCtrl.commonMaterials(mockData)).toEqual(tags);
    });
  });
});
