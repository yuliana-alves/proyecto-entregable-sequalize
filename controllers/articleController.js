const { where } = require("sequelize");
const { Article } = require("../models");

async function index(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

async function show(req, res) {
  const oneArticle = await Article.findByPk(req.params.id);
  res.json(oneArticle);
}

async function store(req, res) {
  const article = await Article.create({
    title: req.body.title,
    content: req.body.content,
    autor: req.body.autor,
  });
  res.json(article);
}

async function update(req, res) {
  const articleToUpdate = await Article.findByPk(req.body.id);
  await articleToUpdate.update(req.body);
  res.json(articleToUpdate);
}

async function destroy(req, res) {
  const deletedArticle = await Article.destroy({
    where: { id: req.body.id },
  });
  res.json(deletedArticle);
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
