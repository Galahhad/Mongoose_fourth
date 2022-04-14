const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: String,
  biography: String,
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;