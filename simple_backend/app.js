const express = require("express");
const indexRouter = require("./routes/index");
const { basicAuth } = require("./basic_auth/index");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(basicAuth());
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`simple_backend listening on port ${port}`);
});
