const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  full_name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;