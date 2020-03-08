const express = require("express");

let app = express();

app.get("/api/test", (req, res) => {
  res.send("in express index.js 2");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("running on port ", PORT);
});
