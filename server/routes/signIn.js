const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { getUser } = require("../db/users");

const signIn = Router();

signIn.post("/", (req, res) => {
  const { db, body } = req;
  const { username, password } = body;

  db.query(getUser(username), (err, row, fields) => {
    if (err) {
      res.status(404).send("failed to log in!");
    } else {
      const { username, password: pw, id: userID } = row[0];
      if (password === pw) {
        const token = jwt.sign({ username, userID }, "peewee");
        res.status(200).json({ token });
      } else {
        res.status(404).send("failed to log in!");
      }
    }
  });
});
module.exports = signIn;
