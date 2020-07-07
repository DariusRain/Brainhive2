const { Schema, models } = require("mongoose");
const postSchema = Schema({
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
  },
  link: String,
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
  },
  publishedAt: Date,
  videoLength: Number,
});

module.exports = models("Post", postSchema);
