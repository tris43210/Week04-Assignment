CREATE TABLE musicStorage (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  trackName TEXT,
  BPM INT,
  key TEXT,
  comments TEXT
); 

ALTER TABLE musicstorage
ADD COLUMN artistName TEXT;

INSERT INTO musicStorage (trackName, BPM, "key", comments, artistName) 
VALUES ('Fine Day Anthem', 138, '11A', 'Long Intro', 'Skrillex Boyz Noise & Opus III');

INSERT INTO musicStorage (trackName, BPM, "key", comments, artistName) 
VALUES ('Left to Right (Space Laces Remix)', 128, '2A', 'Left to Right Remix', 'Odd Mobb Space Laces'), ('Boost Up', 128, '8A', 'Groovy', 'Flowdan FISHER')