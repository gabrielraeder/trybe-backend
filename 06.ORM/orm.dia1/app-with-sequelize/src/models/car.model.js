const CarModel = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
  });

  return Car;
};

module.exports = CarModel;