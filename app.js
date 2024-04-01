const { login } = require('./scripts/login');
const { logout } = require('./scripts/logout');
const { checkBalance } = require('./scripts/checkBalance');
const { deposit } = require('./scripts/deposit');
const { viewTransactions } = require('./scripts/viewTransactions');
const { askQuestion } = require('./scripts/utils');

async function main() {
  login()

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
