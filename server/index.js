require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
app.listen(PORT, () => console.log(" ok let's go 🚀🚀 "));
