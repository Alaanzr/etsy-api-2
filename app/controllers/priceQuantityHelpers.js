exports.average = function(data, property) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += parseInt(data[i][property]);
  }
  return total / data.length;
};

exports.sortData = function(array, property) {
  array.sort(function(a, b) {
    if (parseInt(a[property]) > parseInt(b[property])) return 1;
    if (parseInt(a[property]) < parseInt(b[property])) return -1;
    return 0;
  });
};
