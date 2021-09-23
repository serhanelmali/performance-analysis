const express = require("express");
const Metric = require("../database/metrics");
const router = express.Router();

router.get("/", (req, res) => {
  const metric = new Metric({
    url: "deneme",
    user_agent: "mozilla",
    dom_load: 123,
    fcp: 23,
    ttfb: 44,
    window_load: 55,
    files: [{ name: "test", loadTime: 23 }],
    started_at: new Date(),
  });

  metric
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
