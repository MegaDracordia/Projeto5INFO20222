const Atendimento = require("../model/Atendimento");
const Carro = require("../model/Carro");
const Mecanico = require("../model/Mecanico");

function abreadd(req, res) {
  Mecanico.find({}, function (err, mecanicos) {
    Carro.find({}, function (err, carros) {
      res.render("atendimento/add", { Carros: carros, Mecanicos: mecanicos });
    });
  });
}

function add(req, res) {
  let atendimento = new Atendimento(
    /*req.body*/ {
      carro: req.body.carro,
      descricaoProblema: req.body.descricaoProblema,
      mecanico: req.body.mecanico,
      data: new Date(),
    }
  );

  atendimento.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/atendimento/lst");
    }
  });
}

function list(req, res) {
  Atendimento.find({})
    .populate("carro")
    .populate("mecanico")
    .exec(function (err, atendimentos) {
      res.render("atendimento/lst", { Atendimentos: atendimentos });
    });
}

function filtro(req, res) {
  Atendimento.find(
    { titulo: new RegExp(req.body.pesquisar, "i") },
    function (err, atendimentos) {
      res.render("atendimento/lst", { Atendimentos: atendimentos });
    }
  );
}

function del(req, res) {
  Atendimento.findByIdAndDelete(req.params.id, function (err, atendimentos) {
    res.redirect("/admin/atendimento/lst");
  });
}

function abreedt(req, res) {
  Atendimento.findById(req.params.id, function (err, atendimento) {
    Mecanico.find({}, function (err, mecanicos) {
      Carro.find({}).exec(function (err, carros) {
        res.render("atendimento/edt", {
          Atendimento: atendimento,
          Carros: carros,
          Mecanicos: mecanicos,
        });
      });
    });
  });
}

function edt(req, res) {
  Atendimento.findByIdAndUpdate(
    req.params.id,
    {
      carro: req.body.carro,
      descricaoProblema: req.body.descricaoProblema,
      mecanico: req.body.mecanico,
      data: new Date(),
    },
    function (err, atendimento) {
      res.redirect("/admin/atendimento/lst");
    }
  );
}

module.exports = {
  abreadd,
  add,
  list,
  filtro,
  abreedt,
  edt,
  del,
};
