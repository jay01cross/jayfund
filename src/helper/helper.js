"use strict";

const getAvatar = function (name) {
  const [firstName, lastName] = name.split(" ");

  if (lastName) {
    return firstName.at() + lastName.at();
  } else {
    return firstName.slice(0, 2);
  }
};

module.exports = getAvatar;
