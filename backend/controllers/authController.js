const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure this path is correct

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password, name, profilePicture } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      username,
      email,
      password,
      name,
      profilePicture
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Function to simulate sending an email
const sendWelcomeEmail = (email) => {
  console.log(`Welcome email sent to ${email}`);
};

export const signup = async (userData) => {
  try {
    const res = await axios.post('/auth/signup', userData);
    localStorage.setItem('token', res.data.token);
    // Call the function to simulate sending a welcome email
    sendWelcomeEmail(userData.email);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};