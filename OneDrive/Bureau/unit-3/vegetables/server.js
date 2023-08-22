//Imports
const express = require('express');
const app = express();

//Schema/Model/Data for Veggies
const vegetables = require('./models/vegetables.js');

//View Engine to View JSX in browser, because we aren't using React yet.
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: false }));

//Middleware, runs every time a route is accessed
app.use((req, res, next) => {
  console.log('I run for all routes!');
  next();
});

//root
app.get('/', (req, res) => {
   res.send("<h1>hello swe!</h1>")
});

// vegetables index route
app.get('/vegetables', (req, res) => {
    res.render("Index",{ vegetables: vegetables });
});

//Route to get New vegetables './views/vegetables/New.jsx'
app.get('/vegetables/new', (req, res) => {
    res.render('New');
});

//Route to create/post veggies
app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    vegetables.push(req.body);
    res.redirect('/vegetables'); 
    });


// show route
app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    // res.send(vegetables[req.params.indexOfVegetablesArray]);
    res.render('Show',{
    vegetable: vegetables[req.params.indexOfVegetablesArray]
  });

});



app.listen(3000, () => {
    console.log('listening');
});
