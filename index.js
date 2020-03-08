const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

let app = express();

const apiProxy = createProxyMiddleware("/client", {
  target: "http://localhost:3000"
});

app.get("/api/test", (req, res) => {
  res.send("in express index.js 2");
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("running on port ", PORT);
});
