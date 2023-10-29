require('dotenv').config();

const jwt = require('jsonwebtoken');

const authToken = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createJwt = (payload) => jwt.sign(payload, process.env.JWT_SECRET, authToken);

const verifyJwt = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { createJwt, verifyJwt };
