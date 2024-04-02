const { accounts } = require('./accounts');
const { user } = require('./user');

function deposit(account, amount) {
  account.balance += amount;
  account.transactions.push(`Deposit:  + ${amount}`);
  return account.balance;
}

module.exports = { deposit };
