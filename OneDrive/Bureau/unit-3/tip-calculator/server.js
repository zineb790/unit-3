const express = require('express')
const app = express();
const port = 3000;

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total;
    const tipPercentage = req.params.tipPercentage;
    const tipAmount = (total * tipPercentage) / 100;

      res.send( 
        `<h1>tip will be:$${tipAmount}</h1>`
    );
})

app.listen(port, () => {
    console.log('listening');
})