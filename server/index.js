const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { getAllScores, addScore } = require('./controller/index.js');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.resolve('client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/scores', getAllScores);
app.post('/score', addScore);

const PORT = 1337;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
