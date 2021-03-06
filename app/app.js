"use strict";

// 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`)); // 절대경로

app.use(bodyParser.json()); // POST 요청으로 들어온 body를 파싱해주는 미들웨어
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;
