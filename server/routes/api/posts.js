const { Router } = require("express");
const router = Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
// const User = require("../../models/User");
// const Proifle = require("../../models/Profile");

// @route GET /api/posts
// @desc Test route
// @access RIVATE
router.get("/test", auth, (req, res) => res.status(200).json({ test: true }));

// @route GET /api/posts
// @desc Test route
// @access RIVATE
router.post(
  "/",
  auth,
  [
    check("author", "Author is required").notEmpty(),
    check("title", "Title is required").notEmpty(),
    check("skillLevel", "Please select from dropdown menu.").isIn([
      "Beginner",
      "Intermediate",
      "Advanced",
      "Associate",
      "junior",
      "senior",
      "lead",
    ]),
    check("link", "URL is required").notEmpty(),
    check("link", "Please include a valid URL. ").isURL(),
    check("resourceType", "Please select from dropdown menu").isIn([
      "Atrticle",
      "Video",
      "Website",
      "Slide Show",
      "eBook",
      "News Letter",
      "Blog",
      "Other",
    ]),
    check("cost", "Cost is required").notEmpty(),
    check("cost", "A valid number is required").isNumeric(),
    check("publishedAt", "Date should be in this format MM/DD/YYYY")
      .optional()
      .isISO8061(),
    check("videoLength", "Length should be HOUR:MIN AM/PM")
      .optional()
      .isNumeric(),
    check("timeToComplete", "Length should be HOUR:MIN AM/PM")
      .optional()
      .isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Find profile with user ID and extract the id from it
      const { _id } = await Profile.findOne({ user: req.user.id });
      const postData = { ...req.body };

      // Attach the id to the postData.
      postData.poster = _id;

      // Create Post
      const post = await Post.create(postData);
      // Respond with post
      return res.status(201).json(post);
    } catch (err) {
      console.error(error);
      return res.status(500).json({ msg: "500 Server Error." });
    }
  }
);

module.exports = router;
