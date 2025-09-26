CREATE TABLE musicStorage (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  trackName TEXT,
  BPM INT,
  key TEXT,
  comments TEXT
); 

ALTER TABLE musicstorage
ADD COLUMN artistName TEXT;