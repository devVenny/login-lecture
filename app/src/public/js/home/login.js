"use strict";

const id = document.getElementById("id"),
  psword = document.getElementById("psword"),
  loginBtn = document.getElementById("login-button");

loginBtn.addEventListener("click", () => {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        location.href = "/";
      } else {
        alert(json.msg);
      }
    });
});

// post 방식
// json 형식의 데이터
// string 타입으로 데이터 전송
// => 해당 api가 동작할 수 있도록 login 페이지에서 post 방식을 받는 api를 만들어주어야한다.
