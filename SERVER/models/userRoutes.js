// File: userRoutes.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./UserModel'); // import the User model

const router = express.Router();

router.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
       // Your business logic here, for example:

        let user = new User({
            name: name, 
            email: email, 
            password: password
        });

        await user.save();

        res.status(200).json({ message: 'User registered successfully' });

    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
});

module.exports = router;