const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const metricSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  user_agent: {
    type: String,
    required: true,
  },

  fcp: {
    type: Number,
    required: true,
  },
  ttfb: {
    type: Number,
    required: true,
  },
  dom_load: {
    type: Number,
    required: true,
  },
  window_load: {
    type: Number,
    required: true,
  },
  files: [
    {
      name: {
        type: String,
        required: true,
      },
      file_type: {
        type: String,
        required: true,
      },
      load_time: {
        type: Number,
        required: true,
      },
    },
  ],
  started_at: {
    type: String,
    required: true,
  },
});

const metrics = mongoose.model("metrics", metricSchema);

module.exports = metrics;
