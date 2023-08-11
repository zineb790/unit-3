// Require Modules
const express = require('express');
const fs = require('fs');

// Create our express app
const app = express();
app.engine('madeline', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)

    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#', '<div>' + options.content + '</div>')
      return callback(null, rendered)
  })
})

// Configure the app (app.set)
app.set('views', './views')
app.set('view engine', 'madeline')

// Mount middleware (app.use)

// Mount routes
// app.get('/', function (req, res) {
//   res.send('<h1>hello express!</h1>');
// });
app.get('/', (req, res) => {
  res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the boss ricky boss'})
});

app.get('/home', function (req, res) {
  res.send('<h1>home page</h1>');
});
app.get('/about-me', (req, res) => {
  res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
})

app.get('/another-one', (req, res) => {
  res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
})


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});