const morgan = require('morgan');

const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/user.routes'));
app.use('/api', require('./routes/mobile.routes'));
app.use('/api', require('./routes/laptop.routes'));
app.use('/api', require('./routes/shoppingCart.routes'));


app.listen(3000);
console.log('Server on port', 3000);
