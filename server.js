const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const assert = require('assert');

const app = express();
const indexRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'Interfaces')));
app.use('/index', indexRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
console.log("Server running on Port 3000");

//mongodb
//private key 2c697c4b-3f30-4b46-a822-dd4705a56e91, public key
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://macWork:Rg012499@db.b9gmy.mongodb.net/DB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Connected to DB")
  client.close();
});

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserData = new Schema({
  email: String,
  password: String,
  zip: String,
});
