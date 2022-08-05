// src/database/migrations/20220805194116-create-watch-times-table.js

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('watch_times', {
      seconds: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdated: 'CASCADE',
        onDelete: 'CASCADE'
      },
      episode_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'episodes', key: 'id' },
        onUpdated: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('watch_times')
  }
};
