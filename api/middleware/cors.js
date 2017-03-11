const url = require('url');

module.exports = function cors(app, schema) {
  app.use((req, res, next) => {
    // Get the associated schema for this path
    const urlPath = url.parse(req.url).pathname;
    const pathSchema = schema.paths[urlPath];

    if (pathSchema) {
      // Get the list of methods that this path supports,
      // and send that in the CORS response.
      const supportedMethods = Object.keys(pathSchema).map(verb => verb.toUpperCase()).join(',');
      res.header('Access-Control-Allow-Methods', supportedMethods);
      res.header('Access-Control-Allow-Origin', req.get('origin'));
      res.header('Access-Control-Allow-Headers', 'Accepts, Authorization, Content-Length, Content-Type');

      if (req.method === 'OPTIONS') {
        // If it's an OPTIONS request, just bail out here.
        res.sendStatus(200);
      } else {
        next();
      }
    } else {
      // If the path doesn't exist, 404.
      res.sendStatus(404);
    }
  });
};
