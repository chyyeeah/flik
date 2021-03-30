const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve('client/dist')));

const PORT = 1337;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
