const jwt = require("jsonwebtoken");
const { secretOrKey } = require("../../config");
module.exports = async (req, res, next) => {
  try {
    const verifyToken = await jwt.verify(req.header("x-bh-token"), secretOrKey);
    if (!verifyToken) {
      return res.status(403).message({ token: "Authentication failed." });
    }
    return next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};
