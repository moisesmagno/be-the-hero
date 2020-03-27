const express = require("express");
const routes = require("./routes");
const app = express();

//Informa que o transito de dados via http será em json.
app.use(express.json());
app.use(routes);

app.listen(3333);
