const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose
    .connect("mongodb://localhost:27017/poshmark", {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("connected to poshmark databse");
    })
    .catch((err) => {
      console.log("database not connected ", err);
    });
};

module.exports = connectDb;