const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const user = require("./routers/user");

const myLogger = function(req, res, next) {
  console.log(req.url);
  next();
};

// app.use(myLogger);
app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("hello world");
});

app.use("/user", user);

app.listen(3000, function() {
  console.log("Example App is listening on port 3000");
});
