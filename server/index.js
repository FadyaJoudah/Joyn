require("dotenv").config();
const express = require("express");
const signupRoutes = require("./routes/signup");
const mysql = require("mysql");

const { PORT } = process.env;

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "joynDB",
});

db.connect();

// db.query("SELECT * FROM users;", function (err, rows, fields) {
//   if (err) throw err;

//   console.log("The solution is: ", rows);
// });
app.use(function (req, res, next) {
  req.db = db; //this db comes from app.js context where you define it
  next();
});
app.use("/signup", signupRoutes);
// app.use("/signup", signupRoute);

// db.end();
// app.use("/signup", signupRouter);

app.listen(PORT, () => console.log(" ok let's go 🚀🚀 "));
