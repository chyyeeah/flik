const moment = require('moment');
const { db } = require('../db/index.js');

module.exports.selectStats = (username) => db`
  SELECT
    created_date,
    AVG(distance_from_target) AS avgDistance,
    AVG(click_time) AS avgDuration
  FROM scores
  WHERE player = ${username}
    AND created_date > ${new Date(moment().subtract(14, 'days'))}
  GROUP BY created_date
  ORDER BY created_date ASC
`;

module.exports.selectCareerStats = username => db`
  SELECT
    AVG(distance_from_target) AS avgCareerDistance,
    AVG(click_time) AS avgCareerDuration
  FROM scores
  WHERE player = ${username}
  GROUP BY player
`;

module.exports.insertScore = (player, distance, duration) => db`
  INSERT INTO scores (created_date, player, distance_from_target, click_time)
  VALUES (${moment().format()}, ${player}, ${distance}, ${duration})
`;
