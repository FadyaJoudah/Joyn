import axios from "axios";
export function signIn(username, password) {
  console.log(username, password);
  return axios.post("http://localhost:8080/signin", {
    username,
    password,
  });
}
