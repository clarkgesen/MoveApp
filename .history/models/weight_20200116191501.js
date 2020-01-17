module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD:models/bmi.js
    const weight = sequelize.define('BMI', {
        height: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_Weight: {
            type: DataTypes.DECIMAL(4, 1),
            allowNull: false,
        },
    });

    return weight;
};
=======
  const Weight = sequelize.define('weight', {
    weight: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: false,
    },
  });

  return Weight;
};
>>>>>>> 441d20cccff326fd54938ba8d2944141ec11fd3c:models/weight.js
