const express = require('express');
const app = express();
const port = 3000;

// Home page route
app.get('/', (req, res) => {
    res.send(
        `<h1>99 Bottles of Milk on the Wall</h1>
    <a href="/98">Take one down, pass it around</a>`
    );
});
// Number of bottles route
app.get('/:number_of_bottles', (req, res) => {
  const bottles = parseInt(req.params.number_of_bottles);

  if (bottles === 0) {
    res.send(`
      <h1>No more bottles of milk on the wall</h1>
      <a href="/">Start over</a>
    `);
  } else {
    const nextBottle = bottles - 1;
    res.send(`
      <h1>${bottles} Bottle${bottles !== 1 ? 's' : ''} of Milk on the Wall</h1>
      <a href="/${nextBottle}">Take one down, pass it around</a>
      <br>
      <a href="/">Start over</a>
    `);
  }
});



app.listen(3000, () => {
    console.log('listening');
});