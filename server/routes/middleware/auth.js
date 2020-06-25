const jwt = require("jsonwebtoken");
const { secretOrKey } = require("../../config");
module.exports = async (req, res, next) => {
  try {
    const decodedToken = await jwt.verify(req.headers["x-bh-token"], secretOrKey);
    if (!decodedToken) {
      return res.status(403).message({ token: "Authentication failed." });
    }
    
    console.log("Verified:", decodedToken)
    req.user = decodedToken;
    return next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};
