function inputIsValid(input) {
    if (input.length !== 6) {  
        return false;
    }

    for (const char of input) {
        if (char < '0' || char > '9') {
          return false;
        }
    }

    return true;
}

function validatePin(input, account) {
    const errText = 'invalid PIN';
    if (!inputIsValid(input)) {
        throw new Error(errText);
    }

    if (account.pin !== input) {
        throw new Error(errText);
    }
}

module.exports = { validatePin };