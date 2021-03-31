const { getAllScores, insertScore } = require('../model/index.js');

const dateUTC = () => {
  const curDate = new Date();
  return `${curDate.getUTCFullYear()}-${curDate.getUTCMonth()}-${curDate.getUTCDate()}`;
};

module.exports.getAllScores = async (req, res) => {
  const test = await getAllScores();
  console.log(test);
  res.sendStatus(200);
};

module.exports.addScore = async (req, res) => {
  const currentDate = new Date().toUTCString();
  const scoresToInsert = [];
  req.body.forEach(score => {
    scoresToInsert.push(insertScore(
      currentDate,
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