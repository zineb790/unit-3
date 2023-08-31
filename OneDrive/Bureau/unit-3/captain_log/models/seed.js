const mongoose = require('./connection');
const Log = require('./Log');

const db = mongoose.connection;

db.on('open', () => {
 // array of starter logs
 const starterLogs = [
  { title: "The Jolly Roger", entry: "roger", shipIsBroken: true },
  { name: "Jackdaw", entry: "jack", shipIsBroken: false },
  { name: 'Adventure Galley', entry: "", shipIsBroken: false },
];

// Delete all logs
Log.deleteMany({})
  .then(data => {
    Log.create(starterLogs)
      .then(data => {
        db.close();
      })
      .catch(error => {
        db.close();
      });
  })
  .catch(error => {
    db.close();
  });
})