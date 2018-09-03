var express = require("express");
var app = express();

app.get("/api/whoami", function(req, res) {

  return res.json({ ipaddress: req.ip, language: req.get('Accept-Language'), software: req.get('User-Agent')});
});

app.listen(8000, function() {
  console.log("Node.js listening ...");
});
