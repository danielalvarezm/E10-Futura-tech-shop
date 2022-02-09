const mongoose = require('mongoose');

mongoose.connect('mongodb://futuraAdmin:futuraAdminpwd@172.16.45.2:27017/futuraDatabase', {
    useNewUrlParser: true,   
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));  