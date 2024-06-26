const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.post("/register", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("Auth failed, email not found");
    }
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(400).send("Auth failed, wrong password");
    }

    //token when signed in successfully
    const payload = {
      userId: user._id.toHexString(),
    };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ user, accessToken });
  } catch (error) {
    next(error);
  }
});

//return user info again
//get user info from auth middleware
router.get("/auth", auth, async (req, res, next) => {
  return res.status(200).json({
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

router.post("/logout", auth, async (req, res, next) => {
  try {
    return res.status(200);
  } catch (error) {
    next(error);
  }
});

router.post("/auth", auth, (req, res) => {});
module.exports = router;
