"use strict";
/**  
* @param {import('sequelize').Sequelize } sequelize
* @param {import('sequelize').DataTypes } DataTypes

*/

module.exports = (sequelize, DataTypes) => {
  const Contato = sequelize.define(
    "Contatos",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      fone: {
        type: DataTypes.STRING,
      },

      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },

      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      }
    },{
      tableName: "Contatos",
      timestamps: false
    });

    Contato.associate = (model) => {
      Contato.belongsTo(model.Users, {
        foreignKey: 'userId',
        as: 'users'
      });
      
  };


  return Contato;
}