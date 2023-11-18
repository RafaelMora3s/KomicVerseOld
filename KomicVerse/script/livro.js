const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  título: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  anoPublicação: {
    type: Number,
    required: true
  },
  gênero: String,
  páginas: Number,
  idioma: String,
  clasficIndicativa: String,  // Considerando que 'clasfic. indicativa' é a classificação indicativa
  ISBN: {
    type: String,
    unique: true
  }
});

const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;
