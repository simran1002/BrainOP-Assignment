// config/jwt.js
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const expiresIn = '1h';

const generateToken = (id) => {
  return jwt.sign({ id }, secret, { expiresIn });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
