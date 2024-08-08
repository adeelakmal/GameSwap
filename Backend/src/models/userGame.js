const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserGame = sequelize.define('UserGame', {}, { timestamps: false })

module.exports = UserGame;