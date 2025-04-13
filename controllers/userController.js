const { User } = require("../models");

async function index(req, res) {
  const users = await User.findAll();
  res.json(users);
}

async function show(req, res) {
  const oneUser = await User.findByPk(req.params.id);
  res.json(oneUser);
}

async function store(req, res) {
  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  });
  res.json(user);
}

async function update(req, res) {
  const userToUpdate = await User.findByPk(req.params.id);
  await userToUpdate.update(req.body);
  res.json(userToUpdate);
}

async function destroy(req, res) {
  const deletedUser = await User.destroy({
    where: { id: req.params.id },
  });
  res.json({ message: "User deleted successfully" });
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
