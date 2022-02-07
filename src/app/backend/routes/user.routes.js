const express = require('express');
const router = express.Router();

const User = require('../models/user');

const jwt = require('jsonwebtoken');
// const userCtrl = require('../controllers/user.controller');

router.get('/',(req, res) => res.send('Hello world'));

router.post('/signup', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName1: req.body.lastName1,
        lastName2: req.body.lastName2,
        email: req.body.email,
        password: req.body.password,
        admin: req.body.admin
    });
    await user.save();

    const token = jwt.sign({ _id: user._id }, 'secretKey');
    res.status(200).json({ token });
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) return res.status(401).send("The email doesn't exists");
    if (user.password !== password) return res.status(401).send("Wrong Password");

    const token = jwt.sign({_id: user._id}, 'secretKey');
    return res.status(200).json({token});
})

module.exports = router;

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorize Request');
    }

    const token = req.headers.authorization.split(' ')[1];

    if (token === 'null') {
        return res.status(401).send('Unauthorize Request'); 
    }

    const payload = jwt.verify(token, 'secretKey');
    req.userID = payload._id;
    next();
}
