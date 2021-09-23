const express = require("express");
const Metric = require("../database/metrics");
const router = express.Router();

router.get("/", (req, res) => {
  Metric.find(this.all).then((metrics) => res.json(metrics));
});

router.post("/", (req, res) => {
  let data = req.body;

  const metric = new Metric(data);

  metric
    .save()
    .then((metric) => {
      res.json({ message: "Metric successfully saved.", data: metric });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        message: "An error occured while saving metric.",
        error: err,
      });
    });
});

module.exports = router;
