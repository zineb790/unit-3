require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const flights = require("./models/flights");
const Flight = require("./models/Flight");
// const router = require("./routes/flightRoutes");


// Global configuration
const mongoURI = process.env.MONGO_URI;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
  .on('open', () => console.log('connected to mongo'))
  .on('close', () => console.log('disconnected from mongoose'))
  .on('error', error => console.log(error))


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: true }));

// INDUCES

//root
app.get('/',  (req, res) => {
    res.send('<h1>welcome aboard!</h1>')
})

// Index view - List of all flights
app.get('/flights', (req, res) => {
  res.render('./flights/Index', { flights });
});

// New view - Form for creating flights
app.get('/flights/new', (req, res) => {
  res.render('./flights/New');
});

// Delete

// Update
// Create
app.post('/flights', (req, res) => { 
   Flight.create(req.body)
    .then((createdFlight) => {
      res.send(createdFlight)
    })
    .catch(error => {
      console.error(error)
    })
});
     
    


// Edit

// Show
app.get('/flights/:indexOfFlightsArray', (req, res) => {
  res.render('./flights/Show', { 
       flight: flights[req.params.indexOfFlightsArray]
    });      
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});