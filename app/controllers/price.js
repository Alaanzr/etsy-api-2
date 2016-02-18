var api = require('./apiCaller.js'),
  helpers = require('./priceQuantityHelpers.js'),
  priceData = {};

exports.request = function(req, res) {
  api(function(data) {
    priceData.averagePrice = averagePrice(data);
    priceData.highestPricedListing = highestPricedListing(data);
    priceData.lowestPricedListing = lowestPricedListing(data);
    res.json(priceData);
  });
};

averagePrice = function(data) {
  return helpers.average(data, "price");
};

highestPricedListing = function(data) {
  sortData(data);
  return data[data.length - 1];
};

lowestPricedListing = function(data) {
  sortData(data);
  return data[0];
};

function sortData(array) {
  array.sort(function(a, b) {
    if (parseInt(a.price) > parseInt(b.price)) return 1;
    if (parseInt(a.price) < parseInt(b.price)) return -1;
    return 0;
  });
}
