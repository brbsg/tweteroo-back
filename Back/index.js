import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let user;
let tweets = [];

app.post("/sing-up", (req, res) => {
  user = req.body;

  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.push(req.body);

  res.send("OK");
});

app.get("/tweets", (req, res) => {
  const auxArr = [];

  for (let i = tweets.length - 1; i >= tweets.length - 10; i--) {
    if (i < 0) break;

    auxArr.push({ ...user });
  }
});

app.listen(5000);
