module.exports = (sequelize, DataTypes) => {
    const Weight = sequelize.define('weight', {
        weight: {
            type: DataTypes.DECIMAL(4, 1),
            allowNull: false,
        },
    });

    return Weight;
};