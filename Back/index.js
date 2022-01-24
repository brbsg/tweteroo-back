import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let user;
let tweets = [];

//=========================================================================

app.post("/sign-up", (req, res) => {
  console.log(req.body);
  user = req.body;

  res.send("OK");
});

//=========================================================================

app.post("/tweets", (req, res) => {
  console.log(req.body);
  tweets.push(req.body);

  res.send("OK");
});

//=========================================================================

app.get("/tweets", (req, res) => {
  console.log(req.body);
  const auxArr = [];

  for (let i = tweets.length - 1; i >= tweets.length - 10; i--) {
    if (i < 0) break;

    auxArr.push({ ...user, tweet: tweets[i].tweet });
  }

  res.send(auxArr);
});

//=========================================================================

app.listen(5000);
