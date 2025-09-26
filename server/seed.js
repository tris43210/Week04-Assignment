import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

db.query(
  `INSERT INTO musicStorage (trackName,BPM,"key",comments,artistName) VALUES ('Victory Lap',140,'1B','Banger','Fred Again..')`
);
