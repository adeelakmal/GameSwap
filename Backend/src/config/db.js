const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_DB_HOST,
    dialect: 'postgres',
    port: process.env.POSTGRES_DB_PORT,
});

sequelize.authenticate()
.then(() => console.log("Connection to database established!"))
.catch((err) => console.log("Failed to establish connection to database", err));

module.exports = sequelize;