const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.json({ message: "hello from the server!" });
});

module.exports = router;
