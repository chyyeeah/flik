const moment = require('moment');
const mongoose = require('../db/index.js');

const userSchema = mongoose.Schema({
  created_date: Date,
  username: String,
  difficulty: String,
  duration: Number,
  distance: Number
});

const User = mongoose.model('User', userSchema);

module.exports.selectStats = username => User.aggregate(
  [
    {
      $match: {
        username,
        created_date: { $gte: new Date(moment().subtract(14, 'days')) }
      }
    },
    {
      $group: {
        _id: '$created_date',
        avgDistance: { $avg: '$distance' },
        avgDuration: { $avg: '$duration' }
      }
    }
  ]
);

module.exports.selectCareerStats = username => User.aggregate(
  [
    { $match: { username }},
    {
      $group: {
        _id: null,
        avgcareerdistance: { $avg: '$distance' },
        avgcareerduration: { $avg: '$duration' }
      }
    }
  ]
);

module.exports.insertScore = (username, distance, duration) => User.create({
  created_date: moment().format(),
  username,
  distance,
  duration
});


// module.exports.selectStats = (username) => db`
//   SELECT
//     created_date,
//     AVG(distance_from_target) AS avgDistance,
//     AVG(click_time) AS avgDuration
//   FROM scores
//   WHERE player = ${username}
//     AND created_date > ${new Date(moment().subtract(14, 'days'))}
//   GROUP BY created_date
//   ORDER BY created_date ASC
// `;

// module.exports.selectCareerStats = username => db`
//   SELECT
//     AVG(distance_from_target) AS avgCareerDistance,
//     AVG(click_time) AS avgCareerDuration
//   FROM scores
//   WHERE player = ${username}
//   GROUP BY player
// `;

// module.exports.insertScore = (player, distance, duration) => db`
//   INSERT INTO scores (created_date, player, distance_from_target, click_time)
//   VALUES (${moment().format()}, ${player}, ${distance}, ${duration})
// `;
