const mongoose = require('mongoose');
const { Schema } = mongoose;

const MobileSchema = new Schema ({

    name: { type: String, required: true },
    description: { type: String, required: true },
    screenSize: { type: Number, required: true },
    camera: { type: String, required: true },
    cpu: { type: String, required: true },
    battery: { type: Number, required: true },
    ram: { type: Number, required: true },
    storage: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    OS: { type: String, required: true },
    date: { type: String, required: true },
    price: { type: Number, required: true }, 
    stock: { type: Number, required: true },
    mark: { type: Number, required: true },
    image: { type: String, required: true },
    
}, {
    timestamps: true
});

// Digo como van a lucir mis datos
module.exports = mongoose.model('Mobile', MobileSchema, 'Mobiles');
