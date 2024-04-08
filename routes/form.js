const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("formulaire");
});

router.post("/traitement", (req, res) => {
  console.log(req.body);
  res.render("traitement", { data: req.body });
});

module.exports = router;
