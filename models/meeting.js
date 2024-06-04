const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Meeting', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};