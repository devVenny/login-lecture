"use strict";

const username = document.getElementById("username"),
  id = document.getElementById("id"),
  psword = document.getElementById("psword"),
  pswordConfirm = document.getElementById("confirm-psword"),
  signinBtn = document.getElementById("sigin-button");

signinBtn.addEventListener("click", (e) => {
  if (psword.value !== pswordConfirm.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  if (!id.value) {
    return alert("아이디를 입력해주세요.");
  }
  e.preventDefault();
  const req = {
    name: username.value,
    id: id.value,
    psword: psword.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if (json.success) {
        location.href = "/login";
      } else {
        alert(json.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
});
