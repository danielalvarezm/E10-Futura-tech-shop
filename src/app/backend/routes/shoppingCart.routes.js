const express = require('express');
const router = express.Router();

const Mobile = require('../models/mobile');
const User = require('../models/user');

router.get('/shoppingCartId/:email', async (req, res) => {
    // Buscar usuario por email
    const user = await User.findOne({"email": req.params.email});
    res.send(user.shoppingCart);
})

router.get('/shoppingCartProduct/:id', async (req, res) => {
    // Buscar producto por id
    const mobile = await Mobile.findById(req.params.id);
    res.send(mobile);
})

router.get('/shoppingCartUser/:email', async (req, res) => {
    const user = await User.findOne({"email": req.params.email});
    res.send(user);
})

router.put('/updateWallet/:email', async (req, res) => {
    const user = await User.findOneAndUpdate(
        { "email": req.params.email },
        { "wallet": req.body.wallet }
    );
    res.send(user);
});

router.put('/clearCart/:email', async (req, res) => {
    const user = await User.findOneAndUpdate(
        { "email": req.params.email },
        {  $set: { shoppingCart: [] }}
    );
    res.send(user);
});

module.exports = router;
