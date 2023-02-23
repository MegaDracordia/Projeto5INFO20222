const express = require("express");
const app = express();
const path = require("path");

var moment = require("moment");
app.locals.moment = moment;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const carroRoute = require("./routes/carroRoute");
const mecanicoRoute = require("./routes/mecanicoRoute");
const atendimentoRoute = require("./routes/atendimentoRoute");
const publicRoute = require("./routes/publicRoute");

app.use("/admin", carroRoute);
app.use("/admin", mecanicoRoute);
app.use("/admin", atendimentoRoute);
app.use("/", publicRoute);

app.listen(3000, function () {
  console.log("Servidor funcionando na porta 3000");
});
