const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("Hello, Jenkins & GitHub CI/CD using github actions!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});