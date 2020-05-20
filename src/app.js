const express = require("express");
const meucontroledeponto = require("./routes/meucontroledeponto");
const logger = require("morgan");
const cors = require("cors");

class App {
  constructor() {
    this.server = express();
    this.isDev = process.env.NODE_ENV != "production";
    this.server.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    if (this.isDev) {
      this.server.use(logger("dev"));
    }
  }

  routes() {
    this.server.use("/ponto", meucontroledeponto);
  }
}

module.exports = new App().server;
