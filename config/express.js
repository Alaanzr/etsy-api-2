var express = require('express');

module.exports = function() {
  var app = express();

  require('dotenv').config();
  require('../app/routes/routes.js')(app);

  return app;
};
