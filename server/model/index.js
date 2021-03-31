const db = require('../db/index.js');

module.exports.getAllScores = () => db`
  SELECT *
  FROM scores
`;

module.exports.insertScore = (date, distance, duration) => db`
  INSERT INTO scores (created_date, distance_from_target, click_time)
  VALUES (${date}, ${distance}, ${duration})
`;
