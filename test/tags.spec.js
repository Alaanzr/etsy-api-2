describe('TagCtrl', function() {

  var tagsCtrl = require('../app/controllers/tags.js');
  var mockData = require('./mockData.js');
  var item1 = mockData[0],
    item2 = mockData[1],
    item3 = mockData[2];
  var tags = [{
    "tumbler": 2
  }, {
    "mom": 2
  }, {
    "teacher gift": 2
  }, {
    "personalized teacher": 2
  }, {
    "iron": 3
  }];

  describe('commonTags function', function() {
    it('identifies the 5 most common materials', function() {
      expect(tagsCtrl.commonTags(mockData)).toEqual(tags);
    });
  });

  describe('commonTagListings function', function() {
    it('retrieves listings that contain the 5 most common materials', function() {
      expect(tagsCtrl.commonTagListings(mockData)).toEqual([item2, item1, item3]);
    });
  });
});
