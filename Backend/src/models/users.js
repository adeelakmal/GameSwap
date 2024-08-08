const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
}, {
    hooks: {
    beforeSave: async (user)=> {
        if (user.changed('password')) {
            user.password = await bcrypt.hash(user.password, 10);
        }
    }
}, timestamps: true
});

User.prototype.validatePassword = (password) => {
    return bcrypt.compare(password, this.password);
}

module.exports = User;