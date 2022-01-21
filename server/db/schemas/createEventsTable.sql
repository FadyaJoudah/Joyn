CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  size INT DEFAULT NULL,
  address VARCHAR (255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  description TEXT NOT NULL,
  pets_allowed BOOLEAN DEFAULT NULL,
  event_vaccination BOOLEAN DEFAULT NULL,
  location POINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
