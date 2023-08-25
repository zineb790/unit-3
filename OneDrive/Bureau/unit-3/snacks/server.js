/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
const Snack = require('./models/Snack');

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Set up inputs for our connect function
const MONGO_URI = process.env.MONGO_URI;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Establish Connection
mongoose.connect(MONGO_URI, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on('open', () => console.log('connected to mongo'))
  .on('close', () => console.log('disconnected from mongoose'))
  .on('error', error => console.log(error))

/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan('tiny')); // logging
app.use(methodOverride('_method')); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parses data sent in the body to make it usable in our app
app.use(express.static('public')); // serves files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get('/', (req, res) => {
  res.send('your server is running... better catch it!');
});

// REMEMBER INDUCES

// Index
app.get('/snacks', (req, res) => {
  Snack.find({})
    .then(foundSnacks => {
      res.render('snacks/Index', {
        snacks: foundSnacks
      });
    })
    .catch(error => res.status(400).json({ error }))
})

// New
app.get('/snacks/new', (req, res) => {
  res.render('snacks/New');
});

// Delete
app.delete('/snacks/:id', (req, res) => {
  const id = req.params.id;

  Snack.deleteOne({ _id: id })
    .then(data => res.redirect('/snacks'))
    .catch(error => res.status(400).json({ error }));
});

// Update
app.put('/snacks/:id', (req, res) => {
  const id = req.params.id
  req.body.cost = parseFloat(req.body.cost);

  Snack.updateOne({ _id: id }, req.body, { new: true })
    .then(data => res.redirect('/snacks'))
    .catch(error => res.status(400).json({ error }));
});

// Create
app.post('/snacks', (req, res) => {
  req.body.cost = parseFloat(req.body.cost);
  Snack.create(req.body)
    .then(data => res.redirect('/snacks'))
    .catch(error => res.status(400).json({ error }));
});

// Edit
app.get('/snacks/:id/edit', (req, res) => {
  const id = req.params.id;

  Snack.findOne({ _id: id })
    .then(foundSnack => {
      res.render('snacks/Edit', { snack: foundSnack });
    })
    .catch(error => res.status(400).json({ error }));
});

// Show
app.get('/snacks/:id', (req, res) => {
  // get the id from params
  const id = req.params.id;

  // find the particular snack from the database
  Snack.findOne({ _id: id })
    .then(foundSnack => {
      res.render('snacks/Show', { snack: foundSnack });
    })
    .catch(error => res.status(400).json({ error }));
});

// SEED ROUTE
app.get('/snacks/seed', (req, res) => {
  // array of starter snacks
  const starterSnacks = [
    { name: "Chips", cost: 3.99, calories: 200 },
    { name: "Cookies", cost: 4.99, calories: 1000 },
    { name: 'Chocolate', cost: 1.99, calories: 400 },
    { name: 'Nuts', cost: 2.99, calories: 500 }
  ];

  // Delete all snacks
  Snack.deleteMany({})
    .then(data => {
      Snack.create(starterSnacks)
        .then(data => {
          res.status(200).json(data);
        })
        .catch(error => {
          res.status(400).json(error);
        });
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))