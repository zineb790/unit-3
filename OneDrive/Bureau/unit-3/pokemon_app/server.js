const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req,
    res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>")
});

app.get('/pokemon', (req, res) => {
    res.render("Index", {pokemon: pokemon});
});

app.get('/pokemon/:indexOfPokemonArray', (req, res) => {
    res.send(pokemon[req.params.indexOfPokemonArray]);
    }); 



app.listen(3000, () => {
    console.log('listening');
});