var request = require('request'), url = 'https://openapi.etsy.com/v2/listings/active?api_key=w2r477wqjrhhatv0ffdspjeh';

module.exports = function(callback) {
  request(url, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(JSON.parse(body).results);
    } else {
      console.log(err);
    }
  });
};
