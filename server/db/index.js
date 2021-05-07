// const postgres = require('postgres');
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/flik',
  {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongoose'));

// module.exports.db = postgres({
//   host: 'localhost',
//   port: 5432,
//   database: 'flik'
// });

module.exports = mongoose;