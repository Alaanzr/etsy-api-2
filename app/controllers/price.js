var api = require('./apiCaller.js'),
  helpers = require('./priceQuantityHelpers.js'),
  priceData = {};

exports.request = function(req, res) {
  api(function(data) {
    priceData.averagePrice = exports.averagePrice(data);
    priceData.highestPricedListing = exports.highestPricedListing(data);
    priceData.lowestPricedListing = exports.lowestPricedListing(data);
    res.json(priceData);
  });
};

exports.averagePrice = function(data) {
  return helpers.average(data, "price");
};

exports.highestPricedListing = function(data) {
  sortData(data);
  return data[data.length - 1];
};

exports.lowestPricedListing = function(data) {
  sortData(data);
  return data[0];
};

var sortData = function(array) {
  array.sort(function(a, b) {
    if (parseInt(a.price) > parseInt(b.price)) return 1;
    if (parseInt(a.price) < parseInt(b.price)) return -1;
    return 0;
  });
};
