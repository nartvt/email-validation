# Example

    var { isEmail } = require("./index");

    isEmail("")  --> false, empty

    isEmail("123@gmail.com") --> false, begin by number

    isEmail(undefined) --> false

    isEmail(null) --> false

    isEmail("123456") --> false

    isEmail("asnak") --> false

    isEmail("!#@$FDS$") --> false

    isEmail("abc0011@gmail.com") --> true