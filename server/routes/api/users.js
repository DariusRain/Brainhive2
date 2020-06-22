// BH users.js
const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const {secretOrKey} = require("./config");
const Profile = require("../models/Profile");
const User = require("../models/User");
const isEmpty = require("../../utils/isEmpty");

const checkRegister = [
  check("email", "Email is required.").not().isEmpty(),
  check("email", "Must include a valid email.").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  check("password", "Password must be over 6 characters.").isLength({
    min: 6,
  }),
];

const checkLogin = [
  check("email", "Email is required.").not().isEmpty(),
  check("password", "Password is required").not().isEmpty(),
]

router.route("/")
.post(
  checkRegister,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;
      const exists = User.findOne({ email });
      if (!isEmpty(exists)) {
        return res.status(400).json({ email: "Email is allready registered." });
      }
      const salt = bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      await User.create({ email, password: hashed });
      return res
        .status(201)
        .json({ user: "Successfully registered, login to get started. " });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: { message: error.message } });
    }
  }
)
.put( 
  checkLogin,
  async (req, res) => {
      try {
        const {email, password} = req.password;
        const user = await User.findOne({ email });
        if (!isEmpty(user)) {
          return res.status(400).json({message: "Invalid email and or password"});
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        
        if (!isValidPassword) {
          return res.status(400).json({message: "Invalid email and or password"});
        }
       User.findOneByIdAndUpdate(user.id, {lastLogin: Date.now()})
        const payload = {
          id: user.id,
          email
        }
        const token = jwt.sign(payload, secretOrKey, {});
        return res.json({token});
      } catch (error) {
        console.error(error);
      }
})



router.post("/profile", async (req, res) => {
  try {
    const profile = await Profile.create(req.body, (err, profile) => {
      if (err) return err;
      return profile;
    });
    return res.status(201).json({ profile });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: { message: error.message } });
  }
});

module.exports = router;
