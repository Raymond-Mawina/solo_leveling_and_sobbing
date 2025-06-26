const express = require("express");
const router = express.Router();

/* GET the main page. */
router.get("/", function (req, res, next) {
  res.send("welcome to simple backend");
});

module.exports = router;
