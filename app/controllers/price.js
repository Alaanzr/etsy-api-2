var api = require('./apiCaller.js');

exports.request = function(req, res) {
  api(function(body) {
    res.json(body);
  });
};
