const express = require('express');
const bodyParser = require('body-parser');
const app = express();

function cors(req, res) {
  res.header('Access-Control-Allow-Origin', req.get('origin'));
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length');
}

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    cors(req, res);
    res.send(200);
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  cors(req, res);
  res.send({
    username: req.body.username,
    realName: 'Jane Doe',
    role: 'participant',
    eligibility: { }
  });
});

app.listen(process.env.PORT || 8000);
