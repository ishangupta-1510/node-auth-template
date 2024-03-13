const express = require("express");
const loginRouter = require("./routes/user/login.routes");
const registerRouter = require("./routes/user/register.routes");
const connect = require("./utils/db");

const app = express();
const PORT = 4000;
connect();

app.use(express.json());

app.use("/api/v1", loginRouter);
app.use("/api/v1", registerRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
