var api = require('./apiCaller.js'),
  helpers = require('./materialsTagsHelper.js'),
  tagData = {};

exports.request = function(req, res) {
  api(function(data) {
    tagData.commonTags = exports.commonTags(data);
    tagData.commonTagListings = exports.commonTagListings(data);
    res.json(tagData);
  });
};

exports.commonTags = function(data) {
  var tagCount = helpers.propertyCount(data, 'tags');
  var tagsArray = helpers.createPropertiesArray(tagCount);
  return helpers.extractItems(tagsArray, 5);
};

exports.commonTagListings = function(data) {
  var tags = exports.commonTags(data);
  return helpers.filterListings(data, 'tags', tags);
};
