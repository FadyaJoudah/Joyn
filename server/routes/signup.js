const { Router } = require("express");
const passport = require("passport");
const signup = Router();
// require("./OAuth");

// signup.get("/", (req, res) => {
//   res.send('<a href="signup/auth/google">Authenticate with Google</a>');
// });

// signup.get("/in", (req, res) => {
//   res.send("Hello!");
// });

// signup.get("signup/auth/google", () => {
//   console.log("dsa");
//   passport.authenticate("google", { scope: ["email", "profile"] });
// });

signup.post("/", (req, res) => {
  const { db, body } = req;
  const { email, password, name, username, vaccination } = body;
  let vaccine = vaccination === true ? 1 : 0;
  db.query(
    // `INSERT INTO users(email,password,fname,username,vaccination) VALUES (${email},${password},${name},${username},${vaccination});`
    `INSERT INTO users(email,password,fname,username,vaccination) VALUES ('${email}','${password}','${name}','${username}','${vaccine}');`
  );

  res.send("OK");
});

module.exports = signup;
