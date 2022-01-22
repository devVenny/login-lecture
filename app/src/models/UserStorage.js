"use strict";

const fs = require("fs").promises;

class UserStorage {
  // 은닉화한 메소드는 항상 코드의 최상단으로 올린다
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, key) => {
      newUser[key] = users[key][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        //  field = 각각의 요소(by 순회)/ [id, psword, name ]에 id, psword, name 값 체크 return boolean
        // 있으면 true(조건문 실행o) 없으면 false(조건문 실행x)
        // newUsers에 필드 추가
        newUsers[field] = users[field];
        return newUsers; // 새로운 users 변수 생성
      }
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    // const users = this.#users;
    return fs
      .readFile("./src/database/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => console.error(err));
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.psword.push(userInfo.psword);
    users.name.push(userInfo.name);
    return { success: true };
  }
}

module.exports = UserStorage;
