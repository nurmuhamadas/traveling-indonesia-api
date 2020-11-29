const app = require('./server');
const {MongoClient} = require('mongodb');
const DestinationsModel = require('./models/destinations.model');
require('dotenv').config();

const port = process.env.PORT || 5000;

const client = new MongoClient(
    process.env.DESTINATION_DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
);
client.connect()
    .then(() => {
      app.listen(port, async () => {
        await DestinationsModel.injectDB(client);
        console.log(`Listening on port: ${port}`);
      });
    })
    .catch((error) => {
      console.log(`Faild to connect. Error: ${error}`);
      process.exit(1);
    });
