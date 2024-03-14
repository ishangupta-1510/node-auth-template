const express = require("express");
const authMiddleware = require("../../middlewares/auth");
const router = express.Router();

// Protected route
router.get("/profile", authMiddleware, (req, res) => {
  const userId = req.userId;
  res.json({ userId });
});

module.exports = router;
