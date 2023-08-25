require('dotenv').config();
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
const Pokimon = require('./models/Pokimon.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));

//Induces
//Root
app.get('/', (req,
    res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>")
});

//Index
app.get('/pokemon', (req, res) => {
    // res.render("Index", {pokemon});
 res.send(pokemon);
  Pokimon.find({})
    .then((allPokemon) => {
      console.log(allPokemon);
      res.render('Index', { pokemon: allPokemon });
    })
    .catch(error => {
      console.error(error)
    })
});

//New
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});
//Delete
//Update
//Create
app.post('/vegetables', (req, res)=>{
   
    Vegetable.create(req.body)
    .then((createdPokimon) => {
      res.send(createdPokimon)
    })
    .catch(error => {
      console.error(error)
    })
});

 //Edit

//Show
app.get('/pokemon/:indexOfPokemonArray', (req, res) => {
    // res.send(pokemon[req.params.indexOfPokemonArray]);
     res.render('Show',{pokemon:[req.params.indexOfPokemonArray]});
}); 
//Delete
//Update
    




app.listen(3000, () => {
    console.log('listening');
});