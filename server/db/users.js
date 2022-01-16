function addUser(email, password, name, username, vaccination) {
  const query = `INSERT INTO users(email,password,fname,username,vaccination) VALUES ('${email}','${password}','${name}','${username}','${vaccination}');`;
  return query;
}

function getUser(username) {
  const signInQuery = `SELECT * FROM users WHERE username = '${username}';`;

  return signInQuery;
}
module.exports = { addUser, getUser };
