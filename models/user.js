const mongoose = require("mongoose");
const { arrayBuffer } = require("stream/consumers");
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
    wishList: Array,
  },
  { timeStamps: true }
);



module.exports = mongoose.model("User", userSchema);

