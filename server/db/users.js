function addUser(email, password, name, username, vaccination) {
  const query = `INSERT INTO users(email,password,fname,username,vaccination) VALUES ('${email}','${password}','${name}','${username}','${vaccination}');`;
  return query;
}
module.exports = { addUser };
