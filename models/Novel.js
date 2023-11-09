const mongoose = require("mongoose")
const NovelSchema = mongoose.Schema({
Novel_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Novel",
NovelSchema)