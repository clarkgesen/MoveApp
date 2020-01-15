module.exports = (sequelize, DataTypes) => {
  const Weights = sequelize.define('Weight', {
    weight: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: false,
    },
  });
  return Weights;
};
