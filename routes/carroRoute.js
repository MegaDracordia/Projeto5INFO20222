const express = require('express');
const router = express.Router();
const upload = require('../config/upload');

const carroController = require('../controller/carroController');

router.get('/carro/add', carroController.abreadd);
router.post('/carro/add', upload.single('foto'), carroController.add);
router.get('/carro/lst', carroController.list);
router.post('/carro/lst', carroController.filtro);
router.get('/carro/edt/:id', carroController.abreedt);
router.post('/carro/edt/:id', upload.single('foto'), carroController.edt);
router.get('/carro/del/:id', carroController.del);

module.exports = router;
