module.exports = (sequelize, DataTypes) => {
  const Weight = sequelize.define('Weight', {
    weight: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: false,
    },
  });

    return Weight;
};