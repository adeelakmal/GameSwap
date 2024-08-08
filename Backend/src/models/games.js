const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Game = sequelize.define('Game', {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    platform: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coverImage: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            min: 0, 
            max: 5
        }
    },
    
}, {
    timestamps:true
});

module.exports = Game;