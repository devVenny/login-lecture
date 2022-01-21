"use strict";

const username = document.getElementById("username"),
  id = document.getElementById("id"),
  psword = document.getElementById("psword"),
  pswordConfirm = document.getElementById("confirm-psword"),
  signinBtn = document.getElementById("sigin-button");

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const req = {
    name: username.value,
    id: id.value,
    psword: psword.value,
    pswordConfirm: pswordConfirm.value,
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
