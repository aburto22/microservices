const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const microservicesRouter = require("./routes/microservices");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

function getTimestamp(req, res, next) {
  const timestamp = new Date();
  res.locals.timestamp = timestamp.getTime();
  next();
}

function getHeaders(req, res, next) {
  const headers = {
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    language: req.headers["accept-language"],
    browser: req.headers["user-agent"],
  };

  res.locals.headers = headers;
  next();
}

app.use("/", indexRouter);
app.use("/microservices", getTimestamp, getHeaders, microservicesRouter);
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
