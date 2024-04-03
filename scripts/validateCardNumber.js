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

function validateCardNumber(cardNumber) {
    const input = cardNumber.split(' ').join('');
    const account = (!inputIsValid(input)) ? null : accounts.find(acc => acc.cardNumber.split(' ').join('') === input);
    
    if (!account) {
        throw new Error('Nomor kartu tidak valid.');
    }
    return account;
}

module.exports = { validateCardNumber };
