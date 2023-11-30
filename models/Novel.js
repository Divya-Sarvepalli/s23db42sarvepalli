const mongoose = require("mongoose")
const NovelSchema = mongoose.Schema({
Novel_type:{type: String,
required: true,
},
size: String,
cost: {
    type:Number,
    min :0,
    max:100
}
})
module.exports = mongoose.model("Novel",
NovelSchema)