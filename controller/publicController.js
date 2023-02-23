const Atendimento = require("../model/Atendimento");
function abreindex(req, res) {
  Atendimento.find({})
    .populate("carro")
    .populate("mecanico")
    .exec(function (err, atendimentos) {
      res.render("public/index", { Atendimentos: atendimentos });
    });
}

module.exports = {
  abreindex,
};
