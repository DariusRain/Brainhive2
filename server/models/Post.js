const { Schema, model } = require("mongoose");
const { Comment } = require("./Comment");
const postSchema = new Schema({
  poster: {
    type: Schema.Types.ObjectId,
    ref: "profiles",
  },
  author: String,
  cohort: String,
  title: {
    required: true,
    type: String,
  },
  categories: {
    type: [String],
    default: [],
  },
  skillLevel: {
    type: String,
    enum: [
      "Beginner",
      "Intermediate",
      "Advanced",
      "Associate",
      "junior",
      "senior",
      "lead",
    ],
    required: true
  },
  link: {type: String, required: true,},
  resourceTypes: {
    type: String,
    enum: [
      "Atrticle",
      "Video",
      "Website",
      "Slide Show",
      "eBook",
      "News Letter",
      "Blog",
      "Other",
    ],
    required: true
  },
  cost: {type: Number, required: true},
  publishedAt: Date,
  videoLength: Number,
  comments: {
    type: [Comment],
    default: [],
  },
  likes: { type: [Schema.Types.ObjectId], default: [] },
  rating: {
    type:[{user: Schema.Types.ObjectId, score: Number}],
    default:[]
  }
});

module.exports = Post = model("Posts", postSchema);
