require("dotenv").config();
const express = require("express");
const signupRouter = require("./routes/signup");
var mysql = require("mysql");
const app = express();
const { PORT } = process.env;

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "joynDB",
});

db.connect();

db.query("SELECT * FROM users;", function (err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows);
});
// const signUpRoute = require("./routes/signup")

// app.use("/signup", signupRoute);

db.end();
// app.use("/signup", signupRouter);
app.listen(PORT, () => console.log(" ok let's go 🚀🚀 "));
