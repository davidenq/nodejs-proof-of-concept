const express = require("express");
const { routes } = require("./routes");
const { envs } = require("../config/index");
const { stacktrace } = require("../middleware/stacktrace");
const Hoek = require("@hapi/hoek");

const internals = {};
exports = module.exports = internals;

/** Public API*/
internals.Server = function () {
  Hoek.assert(
    this instanceof internals.Server,
    "Server must be instantiated using new"
  );
  const app = express();
  app.use(stacktrace);
  routes(app);
  // /health endpoint is used to test the status applications. Some cloud services use it in order to test
  // the status of the application
  app.get("/health", async (req, res) => await res.send("ok"));
  app.listen(envs.PORT, () => {
    console.log(`Server is listening on ${envs.PORT}`);
  });
};
