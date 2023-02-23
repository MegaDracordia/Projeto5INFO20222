const Carro = require('../model/Carro');

function abreadd(req, res) {
  res.render('carro/add');
}

function add(req, res) {
  let carro = new Carro(
    /*req.body*/ {
      placa: req.body.placa,
      marca: req.body.marca,
      ano: req.body.ano,
      modelo: req.body.modelo,
      dono: req.body.dono,
      foto: req.file.filename,
    }
  );

  carro.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/admin/carro/lst');
    }
  });
}

function list(req, res) {
  Carro.find({}, function (err, carros) {
    res.render('carro/lst', { Carros: carros });
  });
}

function filtro(req, res) {
  Carro.find(
    { nome: new RegExp(req.body.pesquisar, 'i') },
    function (err, carros) {
      res.render('carro/lst', { Carros: carros });
    }
  );
}

function del(req, res) {
  Carro.findByIdAndDelete(req.params.id, function (err, carros) {
    res.redirect('/admin/carro/lst');
  });
}

function abreedt(req, res) {
  Carro.findById(req.params.id, function (err, carro) {
    res.render('carro/edt', { Carro: carro });
  });
}

function edt(req, res) {
  Carro.findByIdAndUpdate(
    req.params.id,
    {
      placa: req.body.placa,
      marca: req.body.marca,
      ano: req.body.ano,
      modelo: req.body.modelo,
      dono: req.body.dono,
      foto: req.file.filename,
    },
    function (err, carro) {
      res.redirect('/admin/carro/lst');
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
