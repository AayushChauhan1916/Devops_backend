const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is UP" });
});

app.get("/api/hello", (req, res) => {
  res.status(200).json({ success: true, message: "Hello from server" });
});

app.get("/api/fun", async (req, res) => {
  const { type } = req.query;

  try {
    let data;

    if (type === "joke") {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?type=single"
      );
      const result = await response.json();
      data = result.joke;
    }

    if (type === "advice") {
      const response = await fetch("https://api.adviceslip.com/advice");
      const result = await response.json();
      data = result.slip.advice;
    }

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`app is listening on PORT ${PORT}`);
});
