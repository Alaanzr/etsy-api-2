var api = require('./apiCaller.js'),
  priceData = {};

exports.request = function(req, res) {
  api(function(body) {
    priceData.averagePrice = averagePrice(body);
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
