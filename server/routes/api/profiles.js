const { Router } = require("express");
const router = Router();

const Profile = require("../models/Profile");

router.route("/")
.post(async (req, res) => {
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
