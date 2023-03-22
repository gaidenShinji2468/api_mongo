const router = require("express").Router();

function $router(app) {
  app.use("/api/v1", router);
  router.get("/", (req, res) => res.send("Mongo API Services"));
}

module.exports = $router;
