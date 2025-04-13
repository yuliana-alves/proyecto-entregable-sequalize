const { Model, DataTypes } = require("sequelize");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.TEXT,
        },
        autor: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: "article", 
      },
    );

    return Article;
  }
}

module.exports = Article;
