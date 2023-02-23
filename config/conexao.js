const mongoose = require('mongoose');
const banco =
  'mongodb://Henry:Henry123@ac-khwx95d-shard-00-00.0f5xkdm.mongodb.net:27017,ac-khwx95d-shard-00-01.0f5xkdm.mongodb.net:27017,ac-khwx95d-shard-00-02.0f5xkdm.mongodb.net:27017/?ssl=true&replicaSet=atlas-gr64dl-shard-0&authSource=admin&retryWrites=true&w=majority';
// const banco = "mongodb+srv://Henry:Henry123@cluster0.0f5xkdm.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
