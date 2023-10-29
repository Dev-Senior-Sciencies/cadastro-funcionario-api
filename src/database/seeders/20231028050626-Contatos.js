const currentDate = new Date();

module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('Contatos',
        [
          {
            id: 1,
            fone: '+55031975155693',
            userId: 1,
            published: currentDate,
            updated: currentDate,
          },
          {
            id: 2,
            fone: '+5511969434060',
            userId: 2,
            published: currentDate,
            updated: currentDate,
          },
        ]);
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('Contatos', null, {});
    },
  };
  