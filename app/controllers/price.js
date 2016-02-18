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
  helpers.sortData(data, "price");
  return data[data.length - 1];
};

exports.lowestPricedListing = function(data) {
  helpers.sortData(data, "price");
  return data[0];
};
