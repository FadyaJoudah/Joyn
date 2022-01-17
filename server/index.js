require("dotenv").config();
const express = require("express");
const signupRoutes = require("./routes/signup");
const signInRoutes = require("./routes/signIn");
const userRoutes = require("./routes/user");
const eventRoutes = require("./routes/events");
const mysql = require("mysql");

const { PORT } = process.env;

const app = express();
// body parser turns the request body into json
app.use(express.json());

// connecting db to this server
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "joynDB",
});

db.connect();

//makes db available in request obj
app.use(function (req, res, next) {
  req.db = db;
  next();
});

app.use("/signup", signupRoutes);
app.use("/signIn", signInRoutes);
app.use("/user", userRoutes);
app.use("/events", eventRoutes);

app.listen(PORT, () => console.log(" ok let's go 🚀🚀 "));
