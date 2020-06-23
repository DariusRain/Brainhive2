const { Router } = require("express");
const router = Router();
const isEmpty = require("../../utils/isEmpty");
const Profile = require("../../models/Profile");

router.route("/").post(async (req, res) => {
  try {
    const profile = await Profile.create(req.body);

    if (isEmpty(profile)) {
      return res.status(400).json({ errors: { message: "First & last name is required."} });
    }

    return res.status(201).json({ profile });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: { message: error.message } });
  }
});

module.exports = router;
