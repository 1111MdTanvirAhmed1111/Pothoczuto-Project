const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/User');
const { validateInput } = require('../utils/validateInput');

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

    const user = new User({ username, email, password });
    await user.save();

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
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch == true) {
      
      
      const hashedPassword = await bcrypt.hash(password, 10);

      const token = jwt.sign({ id: user._id, password }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
      res.status(200).json({ token });
      
     
    }else{
  
      return res.status(400).json({ message: 'Invalid email or password.' })
}
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};