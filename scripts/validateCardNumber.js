const { accounts } = require('./accounts');

function inputIsValid(input) {
    if (input.length !== 16) {
        return false;
    }

    for (const char of input) {
        if (char < '0' || char > '9') {
          return false;
        }
    }

    return true;
}

function validateCardNumber(input) {
    const uInput = input.split(' ').join('');

    if (!inputIsValid(uInput)) {
        throw new Error('invalid card number');
    }

    let found = false;
    let accKey = null;
    for (const a in accounts) {
        if (accounts[a].cardNumber.split(' ').join('') === uInput) {
            found = true;
            accKey = a;
            break;
        }
    }

    if (!found) {
        throw new Error('card is not found');
    }

    return accKey;
}

module.exports = { validateCardNumber };