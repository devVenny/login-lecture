"use strict";

const id = document.getElementById("id"),
  psword = document.getElementById("psword"),
  loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const req = {
    id: id.value,
    psw: psword.value,
  };

  fetch("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
});
