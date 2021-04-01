const moment = require('moment');

module.exports = queryResults => {
  const store = {};

  queryResults.forEach(({ created_date, avgdistance, avgduration }) => {
    const datePart = moment(created_date).format().split('T')[0];
    store[datePart] = { avgdistance, avgduration };
  });

  const resultDistance = { id: 'distance', data: [] };
  const resultDuration = { id: 'time', data: [] };

  for (let i = 6; i >= 0; i--) {
    const currentDate = moment().subtract(i, 'days').format().split('T')[0];
    if (store[currentDate]) {
      resultDistance.data.push({ x: currentDate, y: store[currentDate].avgdistance });
      resultDuration.data.push({ x: currentDate, y: store[currentDate].avgduration });
    } else {
      resultDistance.data.push({ x: currentDate, y: null });
      resultDuration.data.push({ x: currentDate, y: null });
    }
  }

  return { resultDistance: [resultDistance], resultDuration: [resultDuration] };
};