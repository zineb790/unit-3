const express = require('express');
const app = express();
const fruits = require('./models/fruits')


app.get('/fruits/', (req, res) => {
    res.send(fruits);
});
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, () => {
    console.log('listening');
});