const express = require("express");
const Metric = require("../database/metrics");
const router = express.Router();

router.get("/", (req, res) => {
  const timeRangeMin = () => {
    if (req.query.min) {
      return new Date(req.query.min).toString();
    }

    const date = new Date();
    return date.setMinutes(date.getMinutes() - 30).toString();
  };
  const timeRangeMax = () => {
    if (req.query.max) {
      return new Date(req.query.max).toString();
    }

    return new Date().toString();
  };
  Metric.find({
    started_at: { $gte: timeRangeMin(), $lte: timeRangeMax() },
  }).then((metrics) => res.json(metrics));

  console.log(req.query.min);
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
