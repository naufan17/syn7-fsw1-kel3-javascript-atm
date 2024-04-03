const { accounts } = require('./accounts');

function validateCardNumber(cardNumber) {
    const account = accounts.find(acc => acc.cardNumber === cardNumber);
    if (!account) {
        throw new Error('Nomor kartu tidak valid.');
    }
    return account;
}

module.exports = { validateCardNumber };
