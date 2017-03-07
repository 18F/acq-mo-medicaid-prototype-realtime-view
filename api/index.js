require('./env');

const express = require('express');
const tokens = require('./tokens');
const app = express();
const middleware = require('./middleware');

middleware(app);

app.get('/login', (req, res) => {
  if (req.user) {

  } else {
    res.status(401).send('Not logged in');
  }
});

app.post('/login', (req, res) => {
  // Build a claims token from the user.
  const user = {
    id: 'abc123',
    username: req.body.username,
    claims: []
  };
  const token = tokens.createTokenFromUser(user);

  res.send({
    realName: 'Jane Doe',
    role: 'participant',
    eligibility: { },
    token
  });
});

app.listen(process.env.PORT || 8000);
