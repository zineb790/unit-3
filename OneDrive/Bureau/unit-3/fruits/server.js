require('dotenv').config();
const express = require('express');
const app = express();
const fruits = require('./models/fruits');
const mongoose = require('mongoose');
const Fruit = require('./models/Fruit');
const methodOverride = require('method-override');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//connect to mongooose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// INDUCES

// root
app.get('/',  (req, res) => {
    res.send('<h1>Hello WISE!</h1>')
})

////// INDEX
app.get('/fruits', (req, res) => {
    //     res.send(fruits);
    // res.render('Index', {
    //     fruits: fruits
    // });
     Fruit.find({})
    .then((allFruits) => {
      console.log(allFruits);
      res.render('Index', { fruits: allFruits });
    })
    .catch(error => {
      console.error(error)
    })
});

//////NEW
//Page with form to create a new fruit
app.get('/fruits/new', (req, res) => {
    res.render('New');
});

// Delete
app.delete('/fruits/:id', (req, res) => {
    // res.send("deleting.....")
    Fruit.deleteOne({ _id: req.params.id })
        .then(info => {
            console.log(info)
            res.redirect('/fruits')
        })
        .catch(error => console.log(error))
});

// Update
app.put('/fruits/:id', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    Fruit.updateOne({ _id: req.params.id }, req.body)
        .then(info => {
            console.log(info);
            res.redirect(`/fruits/${req.params.id}`)
        })
});

//////CREATE
//Post Route
//Route handler to tell the browser to create a POST request to /fruits

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    // fruits.push(req.body);
    // res.redirect('/fruits');
      Fruit.create(req.body)
    .then((createdFruit) => {
      res.redirect('/fruits')
    })
    .catch(error => {
      console.error(error)
    })
});
app.get('/fruits/seed', (req, res) => {
    Fruit.insertMany([
        {
            name: 'grapefruit',
            color: 'pink',
            readyToEat: true
        },
        {
            name: 'grape',
            color: 'purple',
            readyToEat: false
        },
        {
            name: 'avocado',
            color: 'green',
            readyToEat: true
        }
    ])
});

// Edit
app.get('/fruits/:id/edit', (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then(foundFruit => {
      res.render(
        'Edit',
        {
          fruit: foundFruit
        }
      )
    })
    .catch(error => console.log(error))
})

///SHOW
// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    
    // res.render('Show', { 
    //     fruit: fruits[req.params.indexOfFruitsArray]
    // }); 
     Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      res.render('Show', {
        fruit: foundFruit
      })
    })
    .catch(error => {
      console.error(error)
    })     
    

});

//////EXECUTES FOR ALL ROUTES
////MiddleWare
// This is called 'middleware'
// It runs in the middle of the request response cycle (in the middle)
// sometime after the request is received, but before the final route handler is called
// Be sure to put middleware at the top of your server.js file, so that other routes don't handle the request and send the response before the middleware can be executed
// Most of the time, you won't write your own middleware, but a lot of plugins and extended functionality of express exist as middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.listen(3000, () => {
    console.log('listening');
});