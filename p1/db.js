const Sequelize = require('sequelize');
const { DataTypes, Models } = Sequelize;

const {
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_HOST,
    DB_DIALECT,
    DB_PORT
} = process.env;

console.log(DB_NAME);

const sequelize = new Sequelize({
    database: DB_NAME,
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    dialect: DB_DIALECT
})

module.exports = {
    Models,
    DataTypes,
    sequelize
}