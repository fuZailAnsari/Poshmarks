const mongoose = require("mongoose");
const accountSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    selectGender: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Brand", accountSchema);
