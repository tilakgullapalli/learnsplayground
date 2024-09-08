// server.js
const express = require("express");
const path = require("path");
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3020;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

