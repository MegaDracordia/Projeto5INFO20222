const mongoose = require("../config/conexao");

const atendimentoSchema = new mongoose.Schema({
  carro: {
    type: mongoose.Types.ObjectId,
    ref: "carro",
  },
  descricaoProblema: String,
  mecanico: [
    {
      type: mongoose.Types.ObjectId,
      ref: "mecanico",
    },
  ],
  data: Date,
});

const atendimento = mongoose.model("atendimento", atendimentoSchema);

module.exports = atendimento;
