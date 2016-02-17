var api = require('./apiCaller.js'),
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
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += parseInt(data[i].price);
  }
  return total / data.length;
};

highestPricedListing = function(data) {
  sortData(data);
  return data[data.length - 1];
};

lowestPricedListing = function(data) {
  sortData(data);
  return data[0];
};

sortData = function(array) {
  array.sort(function(a, b) {
    if (parseInt(a.price) > parseInt(b.price)) return 1;
    if (parseInt(a.price) < parseInt(b.price)) return -1;
    return 0;
  });
};
