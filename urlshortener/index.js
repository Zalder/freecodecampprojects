var express = require("express");
var app = express();

app.get("/api/timestamp/:date_string?", function(req, res) {
  let date = new Date(req.params.date_string);

  if (date.toString() === "Invalid Date") return res.json({ error: date.toString() });

  return res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.listen(8000, function() {
  console.log("Node.js listening ...");
});
