 //Dependencies
require('dotenv').config();
// const morgan = require('morgan');
const express = require('express');
// const mongoose = require("mongoose");
const Log = require("./models/Log");

// const methodOverride = require('method-override');
const bodyParser = require('body-parser');


// Express Application Object
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

//middleware
app.use(express.urlencoded({ extended: true })); // parses data 
app.use(express.static('public'));





// Routes//////
app.get('/', (req, res) => {
  res.send('your server is running... better catch it!');
});

//INDUCES//

//INDEX
app.get('/logs/', (req, res) => {
  Log.find({})
    .then(foundLogs => {
      res.render('Index', {
        logs: foundLogs
      });
    })
    .catch(error => res.status(400).json({ error }))
})


//NEW
app.get('/logs/new', (req, res) => {
  res.render("New");
});

//DELETE

//UPDATE

//CREATE
app.post('/logs/', (req, res) => {
    // res.send = (req.body);
    // console.log(req.body);
    // res.send = ("received");
     req.body.title = parseFloat(req.body.title);
     Log.create(req.body)
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
   
});

//EDIT

//SHOW















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))