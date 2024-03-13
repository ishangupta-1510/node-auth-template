const User = require("../../models/user.models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const loginController = async (req, res) => {
  const { username, password, email } = req.body;
  // console.log(username, password, email);
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = loginController;
