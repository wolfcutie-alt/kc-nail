const { Sequelize } = require("sequelize");
import pg from 'pg';

require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectModule: pg,
    port: process.env.DB_PORT
});

module.exports = sequelize;