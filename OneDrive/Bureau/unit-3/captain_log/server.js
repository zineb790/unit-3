 //Dependencies
const express = require('express');
const app = express();

// Express Application Object
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')






// Routes//////
//INDUCES//

//INDEX

//NEW
app.get('/logs/new', (req, res) => {
  res.render("New");
});

//DELETE

//UPDATE

//CREATE

//EDIT

//SHOW


app.get('/', (req, res) => {
  res.send('your server is running... better catch it!');
});












const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))