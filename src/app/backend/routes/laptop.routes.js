const express = require('express');
const router = express.Router();

const Laptop = require('../models/laptop');

// router.get('/',(req, res) => res.send('Hello world'));

router.post('/addLaptops', async (req, res) => {
    console.log(req.body);
    const laptop = new Laptop({
        name: req.body.name,
        description: req.body.description,
        screenSize: req.body.screenSize,
        camera: req.body.camera,
        cpu: req.body.cpu,
        ram: req.body.ram,
        graphic_card: req.body.graphic_card,
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
    await laptop.save();
})

router.get('/laptops', async (req, res) => {
    const laptop = await Laptop.find();
    res.send(laptop);
});

module.exports = router;

