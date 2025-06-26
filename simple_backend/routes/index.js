const express = require("express");
const router = express.Router();

/* GET some secret. */
router.get("/", function (req, res, next) {
  res.status(200).json({ secret: "The world is a nice place" });
});

module.exports = router;
