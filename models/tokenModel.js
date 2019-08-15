var mongoose = require("mongoose");

var tokenSchema = new mongoose.Schema({
    schoolName: { type: String, unique: true },
    eventName: { type: String, unique: true },
    token: String
});

module.exports = mongoose.model("Token", tokenSchema);