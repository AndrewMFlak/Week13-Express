var bp = require("body-parser");

var express = require("express");

var path = require("path");

var html = require("routing/htmlRoutes.js");
var api = require("routing/apiRoutes.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("App listening on https://localhost:" + PORT);
});