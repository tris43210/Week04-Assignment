import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

app.get(`/`, function (req, res) {
  res.json({ message: "helloo" });
});

app.listen(8080, function () {
  console.log(`Server running on port: http://localhost:8080`);
});
