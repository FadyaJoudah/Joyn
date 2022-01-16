const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { getUser } = require("../db/users");

const user = Router();

user.get("/", (req, res) => {
  const token = req.headers.authorization;
  const { db } = req;
  const decodedToken = jwt.verify(token, "peewee");
  console.log(decodedToken);
  const username = decodedToken.username;
  db.query(getUser(username), (err, row, fields) => {
    if (err) {
      res.status(500).send("failed to sign in");
    } else {
      const { id, email, fname, vaccination } = row[0];
      const user = {
        id,
        email,
        firstName: fname,
        username,
        vaccination: Boolean(vaccination),
      };
      res.status(200).send(user);
    }
  });
  // res.send("dkkdk");
});

module.exports = user;
