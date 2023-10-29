const currentDate = new Date();

module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('Users',
        [{
          id: 1,
          nome: "Samuel Lucas",
          data_nascimento: "1998-04-13",
          data_entrada: "2023-10-28",
          email: 'Samuellucas24383@gmail.com',
          password: '92177699Sl@',
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          id: 2,
          nome: "Gustavo Santiago",
          data_nascimento: "2003-11-27",
          data_entrada: "2023-10-28",
          email: 'gustavosantiago81@yahoo.com.br',
          password: 'arduino27',
          createdAt: currentDate,
          updatedAt: currentDate
        },
        ], { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
    },
  };
  