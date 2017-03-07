require('./env');

const express = require('express');
const tokens = require('./tokens');
const app = express();
const middleware = require('./middleware');
const routes = require('./routes');

middleware(app);
routes(app);

app.listen(process.env.PORT || 8000);
