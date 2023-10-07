const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Assuming you have a User model defined
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json()); // Middleware to understand JSON bodies

app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const saltRounds = 10; // Define the amount of salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds); // Hash the password

    let user = new User({
      name: name,
      email: email,
      password: hashedPassword // Save the hashed password
    });

    await user.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// Your other routes and middleware here

app.listen(5000);