const express = require("express");
const loginRoute = require("./loginRouter");
const userRouter = require("./userRouter");
const contatoRouter = require("./contatoRouter");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const { auth, middlersToken } = require("../middlewares/index");

const router = express.Router();

router.use('/swagger', swaggerUi.serve);

router.get('/swagger', swaggerUi.setup(swaggerDocument));

router.use("/login", auth.authEmail, auth.authPass, loginRoute);

router.use(
  "/user",
  middlersToken,
  userRouter
);

router.use(
  "/contato",
  middlersToken,
  contatoRouter
);

module.exports = router;
