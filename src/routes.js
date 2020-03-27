const express = require("express");

const routes = express.Router();

routes.get("/", (require, response) => {
  return response.json({
    resposta: "teste!"
  });
});

module.exports = routes;
