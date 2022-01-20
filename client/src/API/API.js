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
