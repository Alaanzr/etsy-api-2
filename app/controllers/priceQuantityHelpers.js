exports.average = function(data, property) {
  return data.reduce(function(memo, sum) {
    return memo + parseInt(sum[property]);
  }, 0) / data.length;
};

exports.sortData = function(array, property) {
  array.sort(function(a, b) {
    if (parseInt(a[property]) > parseInt(b[property])) return 1;
    if (parseInt(a[property]) < parseInt(b[property])) return -1;
    return 0;
  });
};
