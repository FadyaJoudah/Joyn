import axios from "axios";
const token = window.localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;

export function signIn(username, password) {
  return axios
    .post("http://localhost:8080/signin", {
      username,
      password,
    })
    .then((res) => {
      const token = res.data.token;
      window.localStorage.setItem("token", token);
    })
    .catch((err) => {
      console.log("request fail");
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
  return axios
    .post(
      "http://localhost:8080/events/create",
      {
        size,
        address,
        type,
        timestamp,
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
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("request fail");
    });
}
