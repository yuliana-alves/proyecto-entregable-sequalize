

const userRoutes = require("./userRoutes");
const articleRoutes = require("./articleRoutes");
const exampleRoutes = require("./exampleRoutes");

module.exports = (app) => {
  app.use("/users", userRoutes);
  app.use("/articles", articleRoutes);
  app.use("/examples", exampleRoutes);
};
