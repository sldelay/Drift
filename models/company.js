module.exports = function (sequelize, DataTypes) {
  let Company = sequelize.define("Company", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Company.associate = function (models) {
    Company.hasMany(models.User, {
      onDelete: "RESTRICT",
    });
  };
  return Company;
};
