const express = require('express');
const router = express.Router();

// INDUCES

//root
router.get('/',  (req, res) => {
    res.send('<h1>welcome aboard!</h1>')
})

// Index view - List of all flights
router.get('/flights', (req, res) => {
  res.render('Index', { flights });
});

// New view - Form for creating flights
router.get('/flights/new', (req, res) => {
  res.render('New');
});

// Delete

// Update
// Create
router.post('/flights', (req, res)=>{ 
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
router.get('/flights/:indexOfFlightsArray', (req, res) => {
  res.render('Show', { 
       flight: flights[req.params.indexOfFlightsArray]
    });      
});


module.exports = router;