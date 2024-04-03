const { accounts } = require('./accounts');
const { user } = require('./user');

function checkBalance(account) {
    console.log(`Saldo Anda: ${account.balance}`);
}

module.exports = { checkBalance };