const app = require('./server');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 5000;

mongoose.connect(
    process.env.DESTINATION_DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
});
