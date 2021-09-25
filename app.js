const express = require("express");
const db = require("./database");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;

const metricRouter = require("./routes/metric");
const scriptRouter = require("./routes/script");
const targetRouter = require("./routes/target");

db();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/metric", metricRouter);
app.use("/script", scriptRouter);
app.use("/target", targetRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
