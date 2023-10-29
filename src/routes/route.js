const express = require("express");
const loginRoute = require("./loginRouter");
const userRouter = require("./userRouter");
const contatoRouter = require("./contatoRouter");

const { auth, middlersToken } = require("../middlewares/index");

const router = express.Router();

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
