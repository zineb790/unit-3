const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');


app.get('/', (req,
    res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>")
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});



app.listen(3000, () => {
    console.log('listening');
});