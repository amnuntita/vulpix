"use strict";

const Express = require("express");
const router = require("./lib");
var cors = require("cors");

const app = Express();
const port = process.env.PORT || 3002;

app.use(cors());

app.use("/api/", router);
app.use("/public", Express.static(__dirname + "/public"));

app.listen(port, function () {
  console.log("Server started on port", port);
});

module.exports = "app";
