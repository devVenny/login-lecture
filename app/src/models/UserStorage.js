"use strict";

class UserStorage {
  static #users = {
    id: ["이형섭", "나예림", "구본경"],
    psword: ["123", "1234", "12345"],
    name: ["hs", "yr", "bk"],
  };

  static getUsers(...fields) {
    // fields = ["id", "psword", "name"]
    const users = this.#users;
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
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKey = Object.keys(users);
    const userInfo = usersKey.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo; // { id: '이형섭', psword: '123', name: 'hs' }
  }
}

module.exports = UserStorage;
