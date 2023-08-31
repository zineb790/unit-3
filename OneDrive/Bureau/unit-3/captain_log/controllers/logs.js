const express = require("express");
const Log = require("../models/Log");
const router = express.Router();

//INDEX
router.get('/', (req, res) => {
  Log.find({})
    .then(foundLogs => {
      res.render('Index', {
        logs: foundLogs
      });
    })
    .catch(error => res.status(400).json({ error }))
})


//NEW
router.get('/new', (req, res) => {
  res.render("New");
});

//DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Log.deleteOne({ _id: id })
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});

//UPDATE
router.put('/:id', (req, res) => {
  const id = req.params.id
  req.body.title = parseFloat(req.body.title);

  Log.updateOne({ _id: id }, req.body, { new: true })
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});

//CREATE
router.post('/', (req, res) => {
    res.send = (req.body);
    console.log(req.body);
    // res.send = ("received");
    //  req.body = parseFloat(req.body);
     Log.create(req.body)
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
   
});

//EDIT
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;

  Log.findOne({ _id: id })
    .then(foundLog => {
      res.render('logs/Edit', { log: foundLog });
    })
    .catch(error => res.status(400).json({ error }));
});

//SHOW
router.get('/:id', (req, res) => {
  // get the id from params
  const id = req.params.id;

  // find the particular log from the database
  Log.findOne({ _id: id })
    .then(foundLog => {
      res.render('/logs/Show', { log: foundLog });
    })
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;