require('dotenv').config();
const express = require('express');
const app = express();
const vegetables = require('./models/vegetables.js');
const mongoose = require('mongoose');
const Vegetable = require('./models/Vegetable');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

//Middleware, runs every time a route is accessed
app.use((req, res, next) => {
  console.log('I run for all routes!');
  next();
});
//Induces
//Index
app.get('/vegetables', (req, res) => {
  res.send(vegetables);
  Vegetable.find({})
    .then((allVegetables) => {
      console.log(allVegetables);
      res.render('Index', { vegetables: allVegetables });
    })
    .catch(error => {
      console.error(error)
    })
});


//New
app.get('/vegetables/new', (req, res) => {
    res.render('New');
});

//Delete
//Update

//Create
app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    // vegetables.push(req.body);
    // res.redirect('/vegetables'); 
    Vegetable.create(req.body)
    .then((createdVegetable) => {
      res.send(createdVegetable)
    })
    .catch(error => {
      console.error(error)
    })
    });


//Edit

//Show
app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    // res.send(vegetables[req.params.indexOfVegetablesArray]);
    res.render('Show',{
    vegetable: vegetables[req.params.indexOfVegetablesArray]
  });

});



//Root
app.get('/', (req, res) => {
   res.send("<h1>hello swe!</h1>")
});





app.listen(3000, () => {
    console.log('listening');
});
