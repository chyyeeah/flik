const { selectStats, insertScore } = require('../model/index.js');
const parseData = require('../utils/parseData.js');

const dateUTC = () => {
  const curDate = new Date();
  return `${curDate.getUTCFullYear()}-${curDate.getUTCMonth()}-${curDate.getUTCDate()}`;
};

module.exports.getStats = async (req, res) => {
  try {
    const results = await selectStats(req.params.username);
    const payload = parseData(results);
    console.log(payload);
    res.send(payload);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
};

module.exports.addScore = async (req, res) => {
  const currentDate = new Date().toUTCString();
  const scoresToInsert = [];
  req.body.results.forEach(score => {
    scoresToInsert.push(insertScore(
      currentDate,
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