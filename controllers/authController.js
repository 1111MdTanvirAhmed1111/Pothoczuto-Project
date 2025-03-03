const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { PrismaClient } = require('@prisma/client');
const { validateInput } = require('../utils/validateInput');

const prisma = new PrismaClient();

exports.register = async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = validateInput(req.body, schema);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const { username, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = validateInput(req.body, schema);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) return res.status(400).json({ message: 'Invalid email or password.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign(
        { id: user.id, password },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.status(200).json({ token });
    } else {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'No token provided or invalid format' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      });
    } catch (err) {
      if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token' });
      }
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
      }
      throw err;
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};