const req = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ma-page", (req, res) => {
  res.send("Bienvenue sur ma page");
});

const formRouter = require("./routes/form");

app.use("/form", formRouter);


app.listen(3000);
