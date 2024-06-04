// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { generateToken } = require('../config/jwt');

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // ... validation logic
    
    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Generate token
    const token = generateToken(newUser._id);

    // Send success response
    res.json({ message: 'Signup successful!', token });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ message: 'Error during signup' });
  }
});

module.exports = router;
