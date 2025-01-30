// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../Model/User');

// POST /api/register - User Registration
router.post('/register', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Create a new user
    const newUser = new User({ name, email });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while registering the user.' });
  }
});

module.exports = router;
