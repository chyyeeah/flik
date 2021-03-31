const postgres = require('postgres');
const db = postgres({
  host: 'localhost',
  port: 5432,
  database: 'flik'
});

module.exports = db;