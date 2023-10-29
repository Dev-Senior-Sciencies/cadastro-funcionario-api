require("dotenv").config();

const moment = require("moment");

const currentDate = moment().format("YYYY-MM-DD");

const { Contatos } = require("../database/models");

const createContato = async (req, res, _next) => {
  try {
    const { fone, userId } = req.body;

    const objectContatos = {
      fone: fone,
      userId: userId,
      published: currentDate,
      updatedAt: currentDate,
    };

    const createdContato = await Contatos.create(objectContatos);

    return res
      .status(200)
      .json({ user: createdContato, message: "Created contato success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllContatos = async (req, res, _next) => {
  try {
    const contatos = await Contatos.findAll();

    return res.status(200).json({ contatos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateContato = async (req, res) => {

  try {

    const { id } = req.params;

    const { fone, userId } = req.body;

    const existingContatos = await Contatos.findByPk(id);

    if (!existingContatos) {
      return res.status(404).json({ message: 'Fone not found' });
    }

    await existingContatos.update({
      fone,
      userId
    });

    return res.status(200).json({ message: `The fone ${fone} was successfully update` });

  } catch (error) {

    return res.status(500).json({ error: error.message });

  }

};

const deleteContato = async (req, res) => {

  try {
    const { id } = req.params;

    const existingContatos = await Contatos.findByPk(id);
    
    if (!existingContatos) {
      return res.status(404).json({ message: 'Fone not found' });
    }

    const deletedFone = existingContatos.fone;

    await existingContatos.destroy();

    return res.status(200).json({ message: `Fone with numero ${deletedFone} was successfully deleted` });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

};

module.exports = {
  createContato,
  getAllContatos,
  updateContato,
  deleteContato
};
