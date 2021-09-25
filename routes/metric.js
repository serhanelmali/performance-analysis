const express = require("express");
const Metric = require("../database/metrics");
const router = express.Router();

router.get("/", (req, res) => {
  const timeMin = () => {
    const date = new Date();
    const minDate = new Date(date.setMinutes(date.getMinutes() - 30));
    return minDate.toString();
  };

  const timeMax = () => {
    return new Date().toString();
  };

  Metric.find({
    started_at: { $gte: timeMin(), $lte: timeMax() },
  }).then((metrics) => res.json(metrics));
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
