const express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("hellllllllo");
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("running on port ", PORT);
});
