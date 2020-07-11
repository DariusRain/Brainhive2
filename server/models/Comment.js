const { Schema } = require("mongoose");
const commentSchema = new Schema({ 
    profile: {
        type: Schema.Types.ObjectId,
    },
    text: {
        type: String,
        required: true
    } 
}, {timestamps: {}});

module.exports = Commment = commentSchema;