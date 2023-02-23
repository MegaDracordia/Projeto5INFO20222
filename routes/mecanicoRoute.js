const express = require('express');
const router = express.Router();
const upload = require('../config/upload');

const mecanicoController = require('../controller/mecanicoController');

router.get('/mecanico/add', mecanicoController.abreadd);
router.post('/mecanico/add', upload.single('foto'), mecanicoController.add);
router.get('/mecanico/lst', mecanicoController.list);
router.post('/mecanico/lst', mecanicoController.filtro);
router.get('/mecanico/edt/:id', mecanicoController.abreedt);
router.post('/mecanico/edt/:id', upload.single('foto'), mecanicoController.edt);
router.get('/mecanico/del/:id', mecanicoController.del);

module.exports = router;
