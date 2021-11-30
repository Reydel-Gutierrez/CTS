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
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://macWork:Rg012499@db.b9gmy.mongodb.net/DB?retryWrites=true&w=majority').then(result => {
  console.log("Connected");
}).catch(err => {
  console.log(err);
});
