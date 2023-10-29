const contatoServices = require("../services/contatoServices");

const createContato = async (req, res, next) => {
  try {
    const contato = await contatoServices.createContato(req, res, next);

    return contato;
  } catch (error) {
    res.status(406).json({ error });
  }
};

const getAllContatos = async (req, res, next) => {
  try {
    const contato = await contatoServices.getAllContatos(req, res, next);

    return contato;
  } catch (error) {
    res.status(406).json({ error });
  }
};

const updateContatoData = async (req, res, next) => {
  try {
    const contato = await contatoServices.updateContato(req, res, next);

    return contato;
  } catch (error) {
    res.status(406).json({ error });
  }
};

const deleteContatoData = async (req, res, next) => {
  try {
    const contato = await contatoServices.deleteContato(req, res, next);

    return contato;
  } catch (error) {
    res.status(406).json({ error });
  }
};

module.exports = {
  createContato,
  getAllContatos,
  updateContatoData,
  deleteContatoData
};
