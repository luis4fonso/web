'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comentarios_artigos',
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.DataTypes.STRING(50), 
        allowNull: false 
      },
      rating: {
        type: Sequelize.DataTypes.TINYINT(1),
      },
      comentario: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },           
      artigos_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "artigos"
          },
          key:"id"
        }
      },
      usuarios_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "usuarios"
          },
          key:"id"
        }
      },
          createdAt: Sequelize.DataTypes.DATE,
          updatedAt: Sequelize.DataTypes.DATE,
          deletedAt: Sequelize.DataTypes.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comentarios_artigos');
  }
};