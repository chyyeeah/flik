const { selectStats, selectCareerStats, insertScore } = require('../model/index.js');
const parseData = require('../utils/parseData.js');
const moment = require('moment');

module.exports.getStats = async (req, res) => {
  try {
    const weeklyStats = await selectStats(req.params.username);
    // const payload = parseData(weeklyStats);
    console.log(weeklyStats);
    const payload = parseData(weeklyStats);
    console.log(payload.resultDuration[0].data);
    res.send(payload);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
};

module.exports.getCareerStats = async (req, res) => {
  try {
    const careerStats = await selectCareerStats(req.params.username);
    console.log(careerStats);
    const payload = careerStats[0];
    res.send(payload);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
};

module.exports.addScore = async (req, res) => {
  const scoresToInsert = [];
  req.body.results.forEach(score => {
    scoresToInsert.push(insertScore(
      req.body.player,
      score.distance_from_target,
      score.click_time
    ));
  });

  try {
    await Promise.all(scoresToInsert);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
};

// module.exports.getCareerStats = async (req, res) => {
//   try {
//     const careerStats = await selectCareerStats(req.params.username);
//     const payload = careerStats[0];
//     res.send(payload);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(400);
//   }
// };

// module.exports.addScore = async (req, res) => {
//   const scoresToInsert = [];
//   req.body.results.forEach(score => {
//     scoresToInsert.push(insertScore(
//       req.body.player,
//       score.distance_from_target,
//       score.click_time
//     ));
//   });

//   try {
//     await Promise.all(scoresToInsert);
//     res.sendStatus(201);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(400);
//   }
// };