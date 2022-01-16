require("dotenv").config();
const express = require("express");
const signupRoutes = require("./routes/signup");
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

app.listen(PORT, () => console.log(" ok let's go 🚀🚀 "));
