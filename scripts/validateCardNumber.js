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
    let account = null;
    for (const a of accounts) {
        if (a.cardNumber.split(' ').join('') === uInput) {
            found = true;
            account = a;
            break;
        }
    }

    if (!found) {
        throw new Error('card is not found');
    }

    return account;
}

module.exports = { validateCardNumber };