exports.materialCount = function(data) {
  var materialCount = {};
  data.map(function(item) {
    exports.increaseCount(item, materialCount);
  });
  return materialCount;
};

exports.extractItems = function(array, numResults) {
  array.sort(function(a, b) {
    return a[Object.keys(a)] - b[Object.keys(b)];
  });
  return array.splice(array.length - (numResults + 1), 5);
};

exports.createMaterialsArray = function(materialCount) {
var materials = [];
  for (var item in materialCount) {
    var obj = {};
    obj[item] = materialCount[item];
    materials.push(obj);
  }
  return materials;
};

exports.increaseCount = function(item, materialCount) {
  item.materials.forEach(function(material) {
    var doesMaterialExist = Object.keys(materialCount).indexOf(material) !== -1;
    return doesMaterialExist ? materialCount[material] += 1 : materialCount[material] = 1;
  });
};
