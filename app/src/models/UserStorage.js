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

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
        return newUsers;
      }
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/database/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch((err) => console.error(err));
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/database/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => console.error(err));
  }

  static async save(userInfo) {
    const users = await this.getUsers(true); // 모든 fields값을 가져오겠다는 의미의 true
    console.log(users);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile("./src/database/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
