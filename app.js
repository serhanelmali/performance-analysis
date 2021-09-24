const express = require("express");
const db = require("./database");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 7000;

const metricRouter = require("./routes/metric");
const scriptRouter = require("./routes/script");
const targetRouter = require("./routes/target");

db();
app.use(morgan("tiny"));
app.use(express.json());

app.use("/metric", metricRouter);
app.use("/script", scriptRouter);
app.use("/target", targetRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));

//TODO
