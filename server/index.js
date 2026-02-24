const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running kala");
  }

  else if (req.url === "/api/hello" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from Node.js!" }));
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found niloy");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});