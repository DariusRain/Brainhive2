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
router.post("/:comentId", auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            res.status(400).json({msg: "Please create a profile before commenting."});
        }
        const index = post.comments.findIndex(comment => comment.id === req.params.commentId)
        if (index === -1) {
            res.status(404).json({msg: "Post not found"})
        }
        const profile = await Profile.findOne({user: req.user.id});

        if(profile.id != post.comments) {

        }
        if (profile.id != post.comments[index].profile) {
            res.status(401).json({msg: "Unauthorized."})
        }
        const comments = post.comments.splice(index, 1 );
        await post.update({comments})
        res.json(post.comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: "Server error."})
    }
    
})
