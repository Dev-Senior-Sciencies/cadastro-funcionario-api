"use strict";

/**  
* @param {import('sequelize').Sequelize } sequelize
* @param {import('sequelize').DataTypes } DataTypes 

*/

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
      },

      password: {
        type: DataTypes.STRING,
      },

      data_nascimento: {
        type: DataTypes.DATE,
      },

      data_entrada: {
        type: DataTypes.DATE,
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      tableName: "Users",
      timestamps: false,
    }
  );

  User.associate = (model) => {
    User.hasMany(model.Contatos, {
      foreignKey: "userId",
      as: "Contatos",
    });
  };
  return User;
};
