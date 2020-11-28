const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../.next')));
app.use('*', (req, res) => {
  res.status(404).json({error: 'Request not found'});
});

module.exports = app;
