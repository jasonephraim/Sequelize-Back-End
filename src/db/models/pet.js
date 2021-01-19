"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      id: DataTypes.FLOAT,
      name: DataTypes.STRING,
      age: DataTypes.FLOAT,
      weight: DataTypes.FLOAT,
      gender: DataTypes.STRING,
      breed: DataTypes.STRING,
      storeID: DataTypes.STRING,
      ownerID: DataTypes.STRING,
      hasShots: DataTypes.BOOLEAN,
      createdDate: DataTypes.DATE,
      updatedDate: DataTypes.DATE,
    },
    {}
  );
  Pet.associate = function (models) {
    // associations can be defined here
  };
  return Pet;
};
