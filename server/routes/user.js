const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { getUser } = require("../db/users");

const user = Router();

user.get("/", (req, res) => {
  //setting the token to the request headers
  const token = req.headers.authorization;
  //getting db into scope after assigning it to req in index line :24
  const { db } = req;
  //decoding the token to use the information stored in it
  const decodedToken = jwt.verify(token, "peewee");
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
});

module.exports = user;
