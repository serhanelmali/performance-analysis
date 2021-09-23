const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database is successfully connected"))
    .catch((err) => console.log(err));
};
