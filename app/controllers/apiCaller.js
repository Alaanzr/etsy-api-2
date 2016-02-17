var request = require('request'),
  config = require('../../config/config.js'),
  url = config.baseUrl + '?api_key=' + process.env.API_KEY;

module.exports = function(callback) {
  request(url, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(JSON.parse(body).results);
    } else {
      console.log(err);
    }
  });
};
