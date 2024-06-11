const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Booking = sequelize.define('Booking', {
    bookingID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateBooking: {
        type: DataTypes.DATE,
        allowNull: false
    },
    bookingDescription: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Booking;