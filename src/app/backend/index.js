const express = require('express');
const app = express();
const cors = require('cors');

require('../database');

app.use(cors());

app.use(express.json());

app.use('/api', require('../routes/user.routes.js'));

app.listen(3000);
console.log('Server on port', 3000);
