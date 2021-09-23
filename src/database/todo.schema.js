const { Schema } = require('mongoose');

module.exports = new Schema({
  username: String,
  title: String,
  author: String,
  completed: Boolean,
  category: String

}, { timestamps: true });

