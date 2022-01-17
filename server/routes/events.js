const { Router } = require("express");
const { addEvent } = require("../db/schemas/events");
const jwt = require("jsonwebtoken");

const events = Router();

events.post("/create", (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = jwt.verify(token, "peewee");
  const { userID } = decodedToken;
  const { db } = req;
  const {
    size,
    address,
    type,
    timestamp,
    description,
    petsAllowed,
    vaccinationRequired,
    location,
  } = req.body;
  let vaccine = vaccinationRequired === true ? 1 : 0;
  let petsFriendly = petsAllowed === true ? 1 : 0;

  db.query(
    addEvent(
      userID,
      size,
      address,
      type,
      timestamp,
      description,
      petsFriendly,
      vaccine,
      location
    ),
    (err, row, fields) => {
      if (err) {
        res.send("failed to create an event!");
      } else {
        db.query(`SELECT @@identity;`, (err, row2) => {
          const eventID = row2[0]["@@identity"];
          res.status(201).send({
            id: eventID,
            userID,
            size,
            address,
            type,
            timestamp,
            description,
            petsFriendly,
            vaccine,
            location,
          });
        });
      }
    }
  );
});

module.exports = events;
