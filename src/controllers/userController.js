const userServices = require("../services/userServices");

const createdUser = async (req, res, next) => {
  try {
    const user = await userServices.createUser(req, res, next);

    return user;
  } catch (error) {
    res.status(406).json({ error });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userServices.getAllUser(req, res, next);

    return users;
  } catch (error) {
    res.status(406).json({ error });
  }
};

const updateUserData = async (req, res, next) => {
  try {
    const user = await userServices.updateUser(req, res, next);

    return user;
  } catch (error) {
    res.status(406).json({ error });
  }
};

const deleteUserData = async (req, res, next) => {
  try {
    const user = await userServices.deleteUser(req, res, next);

    return user;
  } catch (error) {
    res.status(406).json({ error });
  }
};

module.exports = {
  createdUser,
  getAllUsers,
  updateUserData,
  deleteUserData
};
