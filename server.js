const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:3000';

const app = express();
const dbName = 'DB';
const client = new MongoClient(url);

const indexRoutes = require('./routes/index');

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

 client.close();
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'Interfaces')));
app.use('/index', indexRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);

console.log("Server running on Port 3000");
