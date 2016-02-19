var api = require('./apiCaller.js'),
  helpers = require('./materialsHelper.js'),
  materialData = {};

exports.request = function(req, res) {
  api(function(data) {
    materialData.commonMaterials = exports.commonMaterials(data);
    materialData.commonMaterialListings = exports.commonMaterialListings(data);
    res.json(materialData);
  });
};

exports.commonMaterials = function(data) {
  var materialCount = helpers.materialCount(data);
  var materialsArray = helpers.createMaterialsArray(materialCount);
  return helpers.extractItems(materialsArray, 5);
};

exports.commonMaterialListings = function(data) {
  var materials = exports.commonMaterials(data);
  return helpers.filterListings(data, materials);
};
