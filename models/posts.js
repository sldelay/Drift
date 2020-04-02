module.exports = function (sequelize, DataTypes) {
  let Post = sequelize.define("Post", {
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    private: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Post;
};
