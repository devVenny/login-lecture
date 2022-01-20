"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
  // view, show 아무거나 써도 무방
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body); // 유저가 요청할 떄 보낸 body 값(id,psword)
    const response = user.login();
    return res.json(response);
    // const id = req.body.id;
    // const psword = req.body.psword;
    // const response = {};

    //     const users = UserStorage.getUsers("id", "psword");

    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id); // 0
    //   if (users.psword[idx] === psword) {
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }

    // response.success = false;
    // response.msg = "로그인에 실패하였습니다.";
    // return res.json({
    //   response,
    // });
  },
  // 프론트엔드에서 전달한 request를 담은 변수
};

module.exports = {
  output,
  process,
};
