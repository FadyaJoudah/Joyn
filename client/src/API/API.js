import axios from "axios";
const token = window.localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;

//axios requests

export function signIn(username, password) {
  return axios.post("http://localhost:8080/signin", {
    username,
    password,
  });
}

export function eventList() {
  return axios.get("http://localhost:8080/events/all");
}

export function createEvent(
  size,
  address,
  type,
  timestamp,
  description,
  petsAllowed,
  vaccinationRequired,
  location
) {
  return axios.post(
    "http://localhost:8080/events/create",
    {
      size,
      address,
      type,
      timestamp: "2013-08-05 18:19:03",
      description,
      petsAllowed,
      vaccinationRequired,
      location,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
}
