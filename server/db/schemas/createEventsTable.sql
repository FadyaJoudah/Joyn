CREATE TABLE events (
  event_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  PRIMARY KEY (event_id),
  FOREIGN KEY (user_id),
);