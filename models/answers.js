module.exports = function (sequelize, DataTypes) {
  const Answer = sequelize.define("Answer", {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Answer.associate = function (models) {
    Answer.belongsTo(models.Question, {
      foreignKey: {
        allowNull: false,
      },
    });
    Answer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Answer;
};
