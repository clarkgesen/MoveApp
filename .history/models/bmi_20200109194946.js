module.exports = (sequelize, DataTypes) => {
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