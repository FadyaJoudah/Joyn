// query to add events to db
function addEvent(
  userID,
  size,
  address,
  type,
  timestamp,
  description,
  petsAllowed,
  vaccinationRequired,
  location
) {
  const query = `INSERT INTO events(user_id,size,address,type,timestamp,description,pets_allowed,event_vaccination,location) VALUES ('${userID}','${size}','${address}','${type}','${timestamp}','${description}','${petsAllowed}','${vaccinationRequired}',Point(${location.lng},${location.lat}));`;
  return query;
}
// query to get all the events to server
function getAllEvents() {
  const query = "SELECT * FROM events";
  return query;
}

module.exports = { addEvent, getAllEvents };
