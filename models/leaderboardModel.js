var mongoose = require("mongoose");

var leaderboardSchema = new mongoose.Schema({
    school: { type: String, unique: true },
    score: Number,
});

module.exports = mongoose.model("Leaderboard", leaderboardSchema);