"use strict";

const output = {
  // view, show 아무거나 써도 무방
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["이형섭", "나예림", "구본경"],
  psword: ["123", "1234", "12345"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id); // 0
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다.",
    });
  },
  // 프론트엔드에서 전달한 request를 담은 변수
};

module.exports = {
  output,
  process,
};
