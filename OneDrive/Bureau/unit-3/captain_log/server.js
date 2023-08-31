 //Dependencies
require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const Log = require("./models/Log");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


// Express Application Object
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

//middleware
app.use(morgan('tiny')); // logging
app.use(methodOverride('_method')); 
app.use(express.urlencoded({ extended: true })); // parses data 
app.use(express.static('public'));

// Routes Used to be here //////
app.get('/', (req, res) => {
  res.send('your server is running... better catch it!');
});

app.use('/logs', require('./controllers/logs'))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))