var mongoose = require("mongoose");

var schoolSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    abbr: String,
    score: { type: Number, default: 0 }
});

module.exports = mongoose.model("School", schoolSchema);