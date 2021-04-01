const postgres = require('postgres');

module.exports.db = postgres({
  host: 'localhost',
  port: 5432,
  database: 'flik'
});