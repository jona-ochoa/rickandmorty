const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validation: {
            isMail: true,
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      }
   }, { timestamps: false });
};
