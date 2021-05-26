var { isEmail } = require("./index");

console.log(isEmail(""))

console.log(isEmail("123@gmail.com"))

console.log(isEmail(undefined))

console.log(isEmail(null))


console.log(isEmail("123456"))


console.log(isEmail("asnak"))

console.log(isEmail("!#@$FDS$"))

console.log(isEmail("abc0011@gmail.com"))