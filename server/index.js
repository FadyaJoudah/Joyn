require("dotenv").config();
const express = require("express");
const signupRouter = require("./routes/signup");
const app = express();
const { PORT } = process.env;

app.use("/signup", signupRouter);
app.listen(PORT, () => console.log(" ok let's go 🚀🚀 "));
