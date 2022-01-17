const { Router, query } = require("express");
const { addEvent, getAllEvents } = require("../db/schemas/events");
const jwt = require("jsonwebtoken");

const events = Router();

//endpoint to create new event
events.post("/create", (req, res) => {
  //aquiring the token from the request headers sent from the front end
  const token = req.headers.authorization;

  //check if user is logged in
  if (!token) {
    res.status(401).send("you need to sign in first!");
  }

  //decoding the token to use user info inside it
  const decodedToken = jwt.verify(token, "peewee");
  const { userID } = decodedToken;

  //getting db into scope after assigning it to req in index line :24
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
  // changing booleans data type
  let vaccine = vaccinationRequired === true ? 1 : 0;
  let petsFriendly = petsAllowed === true ? 1 : 0;

  //query too add the event to db
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
        //select the id of the event
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

events.get("/all", (req, res) => {
  //deconstruct req to get db and headers
  const { db, headers } = req;

  // getting token from headers
  const token = headers.authorization;
  let decodedToken;

  //checks if the user is logged in and takes the users info from token after decoding
  if (token) {
    decodedToken = jwt.verify(token, "peewee");
  }
  //query to get all the events in db
  db.query(getAllEvents(), (err, rows, fields) => {
    if (err) {
      res.status(500).send("failed to load!");
    } else {
      //if the user is logged in they will have access to all events info
      if (decodedToken) {
        const allEvents = rows.map((row) => {
          return {
            id: row.id,
            userID: row.user_id,
            size: row.size,
            address: row.address,
            type: row.type,
            timestamp: row.timestamp,
            description: row.description,
            petsFriendly: row.petsAllowed,
            vaccine: row.event_vaccination,
            location: { lng: row.location.x, lat: row.location.y },
          };
        });

        res.send(allEvents);
      } else {
        //if the user is not logged in they will have some of the existing info of
        const nonAuthEvents = rows.map((row) => {
          return {
            id: row.id,
            userID: row.user_id,
            // size: row.size,
            // address: row.address,
            // type: row.type,
            // timestamp: row.timestamp,
            description: row.description,
            petsFriendly: row.petsAllowed,
            // vaccine: row.event_vaccination,
            location: { lng: row.location.x, lat: row.location.y },
          };
        });
        s;
        res.send(nonAuthEvents);
      }
    }
  });
});

module.exports = events;
