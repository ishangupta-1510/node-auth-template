const express = require("express");
const registerController = require("../../controller/user/register.controller");

const registerRouter = express.Router();
registerRouter.post("/register", registerController);

module.exports = registerRouter;
