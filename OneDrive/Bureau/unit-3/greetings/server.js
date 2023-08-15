const express = require('express')
const app = express();
const port = 3000;
// Define the greeting route
app.get('/greeting', (req, res) => {
      res.send( 
        `<h1>Hey </h1>`
    );
})
app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
      res.send(
        `<h1>Hey ${name}</h1>`
    );
})
app.listen(port, () => {
    console.log('listening');
})