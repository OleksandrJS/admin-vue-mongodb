/** @format */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);
const User = mongoose.model('User', userSchema);

module.exports = User;

// https://github.com/christiannwamba/vue-auth-vuex/tree/master/src
