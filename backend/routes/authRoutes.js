const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post(
  '/signup',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  authController.signup
);

module.exports = router;
