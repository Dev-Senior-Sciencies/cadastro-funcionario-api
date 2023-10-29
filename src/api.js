const express = require('express');
const middleware = require('./middlewares/index');

const app = express();

app.use(express.json());

app.use(middleware.errorMiddleware);

module.exports = app;
