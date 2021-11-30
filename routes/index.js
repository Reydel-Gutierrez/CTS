const path = require('path');
const mongoose = require('mongoose');

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'Interfaces', 'index.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  userPassword: String,
  userZip: String
});

module.exports = mongoose.model('User', userSchema);
module.exports = router;
