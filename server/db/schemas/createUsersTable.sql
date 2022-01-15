CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fname VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  vaccination BOOLEAN NOT NULL,
  PRIMARY KEY (user_id)
);

function addUser (json){
INSERT INTO users (email, password, fname, username, vaccination) 
VALUES ("fadya@gmail.com", "hello123", "fadya", "faday99", TRUE);

}