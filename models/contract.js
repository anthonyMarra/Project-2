const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contractSchema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        price: Number,
        beds: Number,
        bath: Number
    }
);

module.exports = mongoose.model("Contract", contractSchema);