const express = require('express');
const mongoose = require('mongoose');
const User = require('./UserModel'); // import the User model

const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/api/register', async (req, res) => {
    let hashedPassword;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        hashedPassword = hash;
    }); 
    const { name, email, password } = req.body;
    
    try {
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({
          name: name,
          email: email,
          password: hashedPassword
      
        });

        await user.save();

        res.status(200).json({ message: 'User registered successfully' });
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
});

module.exports = router;