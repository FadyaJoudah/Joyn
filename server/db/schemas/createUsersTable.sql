CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fname VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  vaccination BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);