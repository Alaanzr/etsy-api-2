var express = require('express');

module.exports = function() {
  var app = express();

  require('../app/routes/routes.js')(app);

  return app;
};
