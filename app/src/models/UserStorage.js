"use strict";

class UserStorage {
  static #users = {
    id: ["이형섭", "나예림", "구본경"],
    psword: ["123", "1234", "12345"],
    name: ["hs", "yr", "bk"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        //  field = 각각의 요소(by 순회)/ [id, psword, name ]에 id, psword, name 값 체크 return boolean
        // 있으면 true(조건문 실행o) 없으면 false(조건문 실행x)
        // newUsers에 필드 추가
        newUsers[field] = users[field];
        return newUsers;
      }
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
