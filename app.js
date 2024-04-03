const { login } = require("./scripts/login");
const { logout } = require("./scripts/logout");
const { checkBalance } = require("./scripts/checkBalance");
const { deposit } = require("./scripts/deposit");
const { viewTransactions } = require("./scripts/viewTransactions");
const { askQuestion, rl } = require("./scripts/utils");

async function main() {
  try {
    const account = await login();
    let choice;

    do {
      console.log("======================");
      console.log("Menu ATM:");
      console.log("1. Cek Saldo");
      console.log("2. Setor Tunai");
      console.log("3. Riwayat Transaksi");
      console.log("4. Keluar");

      choice = await askQuestion("Masukkan pilihan Anda: ");

      switch (parseInt(choice)) {
        case 1:
          checkBalance(account);
          break;
        case 2:
          if (await deposit(account)) {
            continue; // Jika setoran berhasil, tampilkan kembali menu ATM
          }
          break;
        case 3:
          viewTransactions(account);
          break;
        case 4:
          logout();
          break;
        default:
          console.log("Pilihan tidak valid, silakan coba lagi.");
          break;
      }
    } while (parseInt(choice) !== 4);
  } catch (err) {
    rl.close();
  }
}

main();
