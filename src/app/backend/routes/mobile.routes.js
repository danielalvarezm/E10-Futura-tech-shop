const express = require('express');
const router = express.Router();

const Mobile = require('../models/mobile');
const User = require('../models/user');

router.post('/addMobiles', async (req, res) => {
    console.log(req.body);
    const mobile = new Mobile({
        name: req.body.name,
        description: req.body.description,
        screenSize: req.body.screenSize,
        camera: req.body.camera,
        cpu: req.body.cpu,
        battery: req.body.battery,
        ram: req.body.ram,
        storage: req.body.storage,
        category: req.body.category,
        brand: req.body.brand,
        OS: req.body.OS,
        date: req.body.date,
        price: req.body.price,
        stock: req.body.stock,
        mark: req.body.mark,
        image: req.body.image
    });
    await mobile.save();
})

router.get('/mobiles', async (req, res) => {
    const mobile = await Mobile.find();
    res.send(mobile);
});

router.get('/mobiles/:id', async (req, res) => {
    const mobile = await Mobile.findById(req.params.id);
    res.send(mobile);
});

router.put('/mobilesToCart/:id', async (req, res) => {
    const obj =  {"id": req.params.id, "amount": req.body.amount };
    const user = await User.findOneAndUpdate(
        { "email": req.body.email }, 
        { $push: { shoppingCart: obj }}
    );
    res.send(user);
});

module.exports = router;