const html = __dirname + "/dist";
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const port = 4000;

const bodyParser = require("body-parser");
const express = require("express");
var app = express();

function getRoot(request, response) {
  response.sendFile(path.resolve("./dist/index.html"));
}

function getUndefined(request, response) {
  response.sendFile(path.resolve("./dist/index.html"));
}
// .use(compression())

app.use(bodyParser.json()).use(express.static(html));
app.get("/", getRoot);
app.get("/*",getUndefined);

// Start server
app.listen(port, function () {
  console.log("Port: " + port);
  console.log("Html: " + html);
});