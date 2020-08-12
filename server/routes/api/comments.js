const {Router} = require("express");
const router = Router();
const auth = require("../middleware/auth");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

// @route GET /api/comments
// @desc Test route
// @access RIVATE

// @route POST /api/comments/postId
// @desc Test route
// @access RIVATE
router.post("/:postId", auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        const profile = await Profile.findOne({user: req.user.id});
        const {text} = req.body;
        if (!profile) {
            res.status(400).json({msg: "Please create a profile before commenting."});
        }
        await post.update({comments: {$push: {text, profile: profile.id}}})
        res.json(post.comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: "Server error."})
    }
    
})

// @route PUT /api/comments
// @desc Test route
// @access RIVATE

// @route DELETE /api/comments
// @desc Test route
// @access RIVATE