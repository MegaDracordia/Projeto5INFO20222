const Mecanico = require("../model/Mecanico");

function abreadd(req, res) {
  res.render("mecanico/add");
}

function add(req, res) {
  let mecanico = new Mecanico(
    /*req.body*/ {
      nome: req.body.nome,
      email: req.body.email,
      celular: req.body.senha,
      cpf: req.body.cpf,
      foto: req.file.filename,
    }
  );

  mecanico.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/mecanico/lst");
    }
  });
}

function list(req, res) {
  Mecanico.find({}, function (err, mecanicos) {
    res.render("mecanico/lst", { Mecanicos: mecanicos });
  });
}

function filtro(req, res) {
  Mecanico.find(
    { nome: new RegExp(req.body.pesquisar, "i") },
    function (err, mecanicos) {
      res.render("mecanico/lst", { Mecanicos: mecanicos });
    }
  );
}

function del(req, res) {
  Mecanico.findByIdAndDelete(req.params.id, function (err, mecanicos) {
    res.redirect("/admin/mecanico/lst");
  });
}

function abreedt(req, res) {
  Mecanico.findById(req.params.id, function (err, mecanico) {
    res.render("mecanico/edt", { Mecanico: mecanico });
  });
}

function edt(req, res) {
  Mecanico.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      email: req.body.email,
      celular: req.body.celular,
      cpf: req.body.cpf,
      foto: req.file.filename,
    },
    function (err, mecanico) {
      res.redirect("/admin/mecanico/lst");
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
