const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  resourceIds: {
    type: [mongoose.Schema.Types.ObjectId]
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  certifications: {
    type: [String],
  },
  occupation:String,
  city: String,
  state: String,
  githubUrl: String,
  twitterUrl: String,
  youtubeUrl: String,
  summary: String,
  timestamps: String,
  avatar: String
});

module.exports = mongoose.model("Profile", profileSchema);

/*
  userId
  fName
  lName
  name
  occupation
  educationLevel
  resourceIds: [] - optional
  certifications
  city
  state
  githubUrl
  twitterUrl
  youtubeUrl
  summary
  timestamps
  avatar
*/
