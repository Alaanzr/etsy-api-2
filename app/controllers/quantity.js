var api = require('./apiCaller.js'),
  helpers = require('./priceQuantityHelpers.js'),
  quantityData = {};

exports.request = function(req, res) {
  api(function(data) {
    quantityData.averageQuantity = averageQuantity(data);
    quantityData.highestQuantityListing = highestQuantityListing(data);
    quantityData.lowestQuantityListing = lowestQuantityListing(data);
    res.json(quantityData);
  });
};

exports.averageQuantity = function(data) {
  return helpers.average(data, "quantity");
};

exports.highestQuantityListing = function(data) {
  sortData(data);
  return data[data.length - 1];
};

exports.lowestQuantityListing = function(data) {
  sortData(data);
  return data[0];
};

var sortData = function(array) {
  array.sort(function(a, b) {
    if (parseInt(a.quantity) > parseInt(b.quantity)) return 1;
    if (parseInt(a.quantity) < parseInt(b.quantity)) return -1;
    return 0;
  });
};
