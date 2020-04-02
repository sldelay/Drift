module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  User.associate = function (models) {
    // We're saying that a User will have many posts
    User.hasMany(models.Post, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return User;
};
