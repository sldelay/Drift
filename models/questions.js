module.exports = function (sequelize, DataTypes) {
  let Question = sequelize.define("Question", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  Question.associate = function (models) {
    Question.hasMany(models.Answer, {
      onDelete: "RESTRICT",
    });
  };
  return Question;
};
