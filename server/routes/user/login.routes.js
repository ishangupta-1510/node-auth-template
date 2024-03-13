const express = require("express");
const userController = require("../../controller/user/login.controller");

const loginRouter = express.Router();

loginRouter.get("/login", userController);

module.exports = loginRouter;
