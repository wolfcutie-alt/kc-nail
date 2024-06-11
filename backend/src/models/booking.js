const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking', {
    bookingid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customername: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    datebooking: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bookingdescription: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'booking',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "booking_pkey",
        unique: true,
        fields: [
          { name: "bookingid" },
        ]
      },
    ]
  });
};
