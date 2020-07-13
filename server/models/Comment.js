const { Schema } = require("mongoose");
const commentSchema = new Schema(
  {
    profile: {
      type: Schema.Types.ObjectId,
      ref: "profiles",
    },
    text: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: {} }
);

module.exports = Commment = commentSchema;
