const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware that checks if authentication is included in the request header
const auth = (req, res, next) => {
  if (req.header.authentication) {
    res.status(401).send("user not authenticated");
  }
  next();
};

router.use(auth);

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`simple_backend listening on port ${port}`);
});
