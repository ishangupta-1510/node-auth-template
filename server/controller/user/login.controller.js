const User = require("../../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const out = await User.findOne({ email });
    console.log(out._id);
    const token = jwt.sign({ userId: out._id }, "secrettestingkey", {
      expiresIn: "1h",
    });
    // console.log(token);
    res.json({ token });
    // const passwordMatch = await bcrypt.compare(password, out.password);
    // if (passwordMatch) {
    //   return res.status(200).json({ test: "user found" });
    // } else {
    //   return res.status(404).json({ error: "user not found" });
    // }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

module.exports = registerController;
