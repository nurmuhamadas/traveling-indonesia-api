const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const destination = require('./routes/destination.route');
const next = require('next');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = express();
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();

nextApp
    .prepare()
    .then(() => {
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended: true}));
      app.use(cors());

      app.use('/api/v1/destinations', destination);
      app.use('/', (req, res) => handle(req, res));
    });

module.exports = app;
