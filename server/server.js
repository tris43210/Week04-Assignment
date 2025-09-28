import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

app.get(`/`, function (req, res) {
  res.json({ message: "helloo" });
});

app.get(`/musicStorage`, async function (req, res) {
  const result = await db.query(`SELECT * FROM musicStorage`);
  res.json(result.rows);
});

app.post(`/musicStorage`, function (req, res) {
  const fromForm = req.body;
  console.log(fromForm);

  const submission = db.query(
    `INSERT INTO musicStorage (trackName,BPM,"key",comments,artistName) VALUES ($1, $2, $3, $4, $5)`,
    [
      req.body.trackName,
      req.body.BPM,
      req.body.key,
      req.body.comments,
      req.body.artistName,
    ]
  );

  res.json({ message: "Your music has been submitted" });
});

app.listen(8080, function () {
  console.log(`Server running on port: http://localhost:8080`);
});
