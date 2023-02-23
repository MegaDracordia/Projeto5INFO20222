const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/fotos');
  },
  filename: function (req, file, cb) {
    const prefixoUnico = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, prefixoUnico + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
