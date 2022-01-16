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
  console.log(req.body);
  res.send("OK");
});

module.exports = signup;
