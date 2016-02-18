exports.average = function(data, property) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += parseInt(data[i][property]);
  }
  return total / data.length;
};

// sortData = function(array) {
//   array.sort(function(a, b) {
//     if (parseInt(a.price) > parseInt(b.price)) return 1;
//     if (parseInt(a.price) < parseInt(b.price)) return -1;
//     return 0;
//   });
// };
