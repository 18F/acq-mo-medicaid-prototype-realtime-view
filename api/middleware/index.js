const bodyParser = require('body-parser');
const corsMiddleware = require('./cors');
const tokenMiddleware = require('./token');

module.exports = function middleware(app) {
  corsMiddleware(app);
  tokenMiddleware(app);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
