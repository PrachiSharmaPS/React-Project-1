const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const likeSchema = new mongoose.Schema({
    user: {
        type: objectId,
        ref: "User"
    }, 
    post: {
        type: objectId,
        ref: "Post"
    }
}, { timestamps: true })

module.exports = mongoose.model("Like", likeSchema)


    