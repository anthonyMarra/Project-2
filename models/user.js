const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
  },
  { timeStamps: true }
);

const contractSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    price: Number,
    beds: Number,
    bath: Number
  }
);

module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("Contract", contractSchema);
