const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const JWT_SECRET = process.env.JWT_SECRET || (() => {
  const buffer = Buffer.alloc(128);
  for (let i = 0; i < buffer.length; i++) {
    buffer.writeUInt8(Math.floor(Math.random() * 256), i);
  }
  return buffer.toString('hex');
})();

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

app.use((req, res, next) => {
  if (req.headers.authorization) {
    try {
      // Attach the user object to the request, so it can
      // easily be checked elsewhere.
      req.user = jwt.verify(req.headers.authorization, JWT_SECRET, { algorithm: 'HS512' });
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  // Build a claims token from the user.
  const user = {
    id: 'abc123',
    username: req.body.username,
    claims: []
  };
  const token = jwt.sign(user, JWT_SECRET, { expiresIn: '2h', algorithm: 'HS512' });

  res.send({
    realName: 'Jane Doe',
    role: 'participant',
    eligibility: { },
    token
  });
});

app.listen(process.env.PORT || 8000);
