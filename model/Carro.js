const mongoose = require('../config/conexao');

const carroSchema = new mongoose.Schema({
  placa: String,
  marca: String,
  ano: String,
  modelo: String,
  dono: String,
  foto: String,
});

const carro = mongoose.model('carro', carroSchema);

module.exports = carro;
