const express = require("express");

const contatoController = require("../controllers/contatoController");

const { auth } = require("../middlewares/index");

const contatoRouter = express.Router();

contatoRouter.post(
  "/create",
  auth.authFone,
  auth.authUserId,
  contatoController.createContato
);

contatoRouter.get("/list", contatoController.getAllContatos);

contatoRouter.put(
  "/update/:id",
  auth.authFone,
  auth.authUserId,
  contatoController.updateContatoData
);

contatoRouter.delete("/delete/:id", contatoController.deleteContatoData);

module.exports = contatoRouter;
