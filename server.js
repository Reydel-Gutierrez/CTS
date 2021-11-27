const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

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
