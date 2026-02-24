const express = require("express");
const path = require("path");


const app = express();

app.use(express.json());

// Example API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node + Express!" });
});
app.get("/", (req, res) => {
  res.json({ message: "Hello from Node + Express!" });
});

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));