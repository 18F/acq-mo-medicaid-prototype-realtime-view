const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
  // Note that the proper thing to do here is actually
  // respond on a per-endpoing basis.  I.e., once we know
  // what endpoints are available in the API, this should
  // respond with just the set of verbs that the endpoint
  // supports, or it should fail if the endpoint does NOT
  // exist.
  res.header('Access-Control-Allow-Origin', req.get('origin'));
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length');

  if (req.method === 'OPTIONS') {
    // If it's an OPTIONS request, just bail out here.
    res.send(200);
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  res.send({
    username: req.body.username,
    realName: 'Jane Doe',
    role: 'participant',
    eligibility: { }
  });
});

app.listen(process.env.PORT || 8000);
