const { accounts } = require("./accounts");
const { user } = require("./user");

function viewTransactions(account) {
  const transactions = account.transactions;
  console.log("Riwayat Transaksi:");

  if (transactions.length === 0) {
    console.log("Belum ada transaksi.");
  } else {
    transactions.map((transaction, i) => console.log(`${i + 1}. ${transaction.type}: Rp ${transaction.amount}`));
  }
}

module.exports = { viewTransactions };
