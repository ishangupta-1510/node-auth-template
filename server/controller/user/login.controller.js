const User = require("../../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const out = await User.findOne({ email });
    if (!out) {
      return res.status(404).json({ error: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, out.password);
    const token = jwt.sign({ userId: out._id }, "secrettestingkey", {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    if (passwordMatch) {
      return res.status(200).json({ test: "user found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

module.exports = registerController;
