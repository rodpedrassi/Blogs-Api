'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,        
       },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      user_id: {
        foreignKey: true,
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // faz referência a tabela
          key:  'id',
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'published',
      },
      updated_at:{
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated',
      },
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};