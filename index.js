const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT ?? 3000;

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is UP" });
});

app.get("/api/hello", (req, res) => {
  res.status(200).json({ success: true, message: "Hello from server" });
});

app.listen(PORT, () => {
  console.log(`app is listening on PORT ${PORT}`);
});
