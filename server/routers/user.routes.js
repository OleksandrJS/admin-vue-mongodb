/** @format */

const express = require('express');
const bcrypt = require('bcrypt');
const data = require('../data.js');
const User = require('../models/UserModel.js');
const generateToken = require('../utils/generateToken.js');

const userRouter = express.Router();

// userRouter.get('/users', async (req, res) => {
//   const createdUsers = await User.insertMany(data.users);
//   res.send({ createdUsers });
// });

userRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(404)
        .send({ message: 'User with this email not found' });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(404).json({ message: 'Wrong password' });
    }

    console.log(user);

    return res.status(200).send({
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  } catch (e) {
    res.send({ message: 'Invalid email or password' });
  }
});

userRouter.post('/register', async (req, res) => {
  try {
    const checkEmail = await User.findOne({ email: req.body.email });

    if (checkEmail) {
      return res
        .status(400)
        .json({ message: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email: req.body.email,
      password: hashedPassword,
    });

    const createdUser = await user.save();

    res.status(201).send({
      _id: createdUser._id,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  } catch (e) {
    res.status(500).send({ message: 'Something went wrong' });
  }
});

module.exports = userRouter;
