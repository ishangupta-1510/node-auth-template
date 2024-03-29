const express = require("express");
const cookieParser = require("cookie-parser");
const loginRouter = require("./routes/user/login.routes");
const registerRouter = require("./routes/user/register.routes");
const profileRouter = require("./routes/user/profile.route");
const connect = require("./utils/db");

const app = express();
const PORT = 4000;
connect();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", loginRouter);
app.use("/api/v1", registerRouter);
app.use("/api/v1", profileRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
