const readLine = require('readline');

const { validatePin } = require('./script/validatePin');
const { validateCardNumber } = require('./script/validateCardNumber');
const { checkBalance } = require('./script/checkBalance');
const { deposit } = require('./script/deposit');
const { viewTransactions } = require('./script/viewTransactions');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  do {
    console.log('Menu ATM:');
    console.log('1. Cek Saldo');
    console.log('2. Setor Tunai');
    console.log('3. Riwayat Transaksi');
    console.log('4. Keluar');

    choice = await askQuestion('Masukkan pilihan Anda: ');

    switch (parseInt(choice)) {
      case 1:
        checkBalance()
        break;
      case 2:
        deposit()
        break;
      case 3:
        viewTransactions()
        break;
      case 4:
        break;
    }
  } while (choice !== 4);
}

main();
