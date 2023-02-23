const mongoose = require('../config/conexao');

const mecanicoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  celular: String,
  cpf: String,
  foto: String,
});

const mecanico = mongoose.model('mecanico', mecanicoSchema);

module.exports = mecanico;
