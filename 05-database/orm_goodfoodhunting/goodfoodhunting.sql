-- relational database store things in tables

CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY, 
  image_url VARCHAR(400),
  name VARCHAR(200)  
);

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(400)
);

ALTER TABLE users ADD COLUMN password_digest VARCHAR(400);


INSERT INTO dishes (name, image_url) VALUES ('pudding','https://lh4.googleusercontent.com/-R5VsOa203DI/Tmea6PtAHqI/AAAAAAAAexQ/9ZeZlWtlUhY/s512/pudding-chocolate-tofu12--.jpg');

INSERT INTO dishes (name, image_url) VALUES ('cake','https://lh4.googleusercontent.com/-R5VsOa203DI/Tmea6PtAHqI/AAAAAAAAexQ/9ZeZlWtlUhY/s512/pudding-chocolate-tofu12--.jpg');


-- pudding, http://blah.com/pudding.png - records
-- cake, http://blah.com/cake.jpg
