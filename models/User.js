const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
  name: String,
  age: String,
  email: String,
  role: String
});

module.exports = Usuario;
