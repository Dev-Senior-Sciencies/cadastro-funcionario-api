const express = require("express");

const userController = require("../controllers/userController");

const { auth } = require("../middlewares/index");

const userRouter = express.Router();

userRouter.post(
  "/create",
  auth.authName,
  auth.authEmail,
  auth.authPass,
  auth.authDataNascimento,
  auth.authDataEntrada,
  userController.createdUser
);

userRouter.get("/list", userController.getAllUsers);

userRouter.put(
  "/update/:id",
  auth.authName,
  auth.authEmail,
  auth.authPass,
  auth.authDataNascimento,
  auth.authDataEntrada,
  userController.updateUserData
);

userRouter.delete("/delete/:id", userController.deleteUserData);

module.exports = userRouter;
