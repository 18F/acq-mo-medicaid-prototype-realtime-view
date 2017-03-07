const tokens = require('../tokens');

module.exports = function token(app) {
  app.use((req, res, next) => {
    delete req.user;
    if (req.headers.authorization) {
      try {
        // Attach the user object to the request, so it can
        // easily be checked elsewhere.
        req.user = tokens.getUserFromToken(req.headers.authorization);
      } catch(e) {
        // If there's an authorization token that we can't
        // verify, send back a 401 and bail out of the
        // request altogether.
        res.status(401).send('Invalid token');
        console.log(e);
        return;
      }
    }
    next();
  });
};
