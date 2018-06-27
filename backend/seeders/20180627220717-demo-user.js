'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        fullname: 'xwork admin',
        username: 'xwork',
        password: 'root',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        fullname: 'Ganang Wahyu',
        username: 'ganang',
        password: 'ganang',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
