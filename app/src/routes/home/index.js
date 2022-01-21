"use strict";

// 모듈
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// GET
router.get("/", ctrl.output.home); // get방식으로 '/'에 접속한 경우 callback 실행
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

// POST
router.post("/login", ctrl.process.login); // request의 body 값을 읽어오려면 bodyparse 모듈이 필요하다.
// router.post("/register", ctrl.process.register);
module.exports = router;
