function isEmail(email) {
    // https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
    var mailformat = /^[a-zA-Z][0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email.match(mailformat)) {
        return true;
    }
    return false
}

module.exports = { isEmail };