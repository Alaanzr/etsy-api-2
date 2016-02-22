exports.propertyCount = function(data, propertyName) {
  var propertyCount = {};
  data.map(function(item) {
    exports.increaseCount(item, propertyCount, propertyName);
  });
  return propertyCount;
};

exports.increaseCount = function(item, propertyCount, propertyName) {
  item[propertyName].forEach(function(property) {
    var doesPropertyExist = Object.keys(propertyCount).indexOf(property) !== -1;
    return doesPropertyExist ? propertyCount[property] += 1 : propertyCount[property] = 1;
  });
};

exports.createPropertiesArray = function(propertyCount) {
  return Object.keys(propertyCount).map(function(property) {
    var properties = {};
    properties[property] = propertyCount[property];
    return properties;
  });
};

exports.extractItems = function(array, numResults) {
  return array.sort(function(a, b) {
    return a[Object.keys(a)] - b[Object.keys(b)];
  }).splice(array.length - numResults, numResults);
};

exports.filterListings = function(data, propertyName, properties) {
  return data.filter(function(listing) {
    return exports.propertyChecker(listing, propertyName, properties).indexOf(true) !== -1;
  });
};

exports.propertyChecker = function(listing, key, properties) {
  return properties.map(function(property) {
    return exports.listingHasProperty(listing, key, Object.keys(property).toString());
  });
};

exports.listingHasProperty = function(listing, key, value) {
  return listing[key].indexOf(value) !== -1;
};
