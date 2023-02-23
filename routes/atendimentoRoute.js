const express = require('express');
const router = express.Router();
const upload = require('../config/upload');

const atendimentoController = require('../controller/atendimentoController');

router.get('/atendimento/add', atendimentoController.abreadd);
router.post('/atendimento/add', atendimentoController.add);
router.get('/atendimento/lst', atendimentoController.list);
router.post('/atendimento/lst', atendimentoController.filtro);
router.get('/atendimento/edt/:id', atendimentoController.abreedt);
router.post('/atendimento/edt/:id', atendimentoController.edt);
router.get('/atendimento/del/:id', atendimentoController.del);

module.exports = router;
