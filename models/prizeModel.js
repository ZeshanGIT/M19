var mongoose = require("mongoose");

var prizeSchema = new mongoose.Schema({
    school: String,
    event: String,
    position: Number,
    score: Number,
});

module.exports = mongoose.model("Prize", prizeSchema);