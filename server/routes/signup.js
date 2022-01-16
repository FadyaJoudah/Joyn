const { Router } = require("express");
const { addUser } = require("../db/users");

const signup = Router();

signup.post("/", (req, res) => {
  const { db, body } = req;
  const { email, password, name, username, vaccination } = body;
  let vaccine = vaccination === true ? 1 : 0;
  db.query(
    addUser(email, password, name, username, vaccine),
    (err, row, fields) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          res.status(409).send("please choose another username!");
        } else {
          res.status(500).send("unable to sign up");
        }
      } else {
        res.status(201).send("user created successfully");
      }
    }
  );
});
module.exports = signup;
