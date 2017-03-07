const loginRoute = require('./login');

module.exports = function routes(app) {
  loginRoute(app);
};
