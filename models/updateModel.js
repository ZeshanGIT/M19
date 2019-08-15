var mongoose = require("mongoose");

var updateSchema = new mongoose.Schema({
    title: String,
    message: String,
    schools: [String],
    events: [String]
});

module.exports = mongoose.model("Update", updateSchema);