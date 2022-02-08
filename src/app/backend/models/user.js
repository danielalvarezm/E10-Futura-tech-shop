const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({
    firstName:{ type: String, required: true },
    lastName1:{ type: String, required: true },
    lastName2:{ type: String},
    email: { type: String, required: true},
    password: { type: String, required: true},
    admin: { type: Boolean, required: true},
    shoppingCart: [{
        id:  String ,
        amount:  String
    }],
    wallet:{ type: Number, required: true } 
}, {
    timestamps: true
});
// Digo como van a lucir mis datos
module.exports = mongoose.model('User', UserSchema, 'Users');
