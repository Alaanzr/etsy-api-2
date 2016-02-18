exports.average = function(data, property) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += parseInt(data[i][property]);
  }
  return total / data.length;
};
