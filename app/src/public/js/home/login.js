"use strict";

const id = document.getElementById("id"),
  psword = document.getElementById("psword"),
  loginBtn = document.getElementById("loginBtn");

console.log(id, psword, loginBtn);

loginBtn.addEventListener("click", () => {
  const req = {
    id: id.value,
    psw: psword.value,
  };

  console.log(req);
  console.log(JSON.stringify(req));
  fetch("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
});
