// deposit.js
const { askQuestion } = require("./utils");

async function deposit(account) {
  try {
    const amount = parseFloat(
      await askQuestion("Masukkan nominal setoran Anda: ")
    );
    if (amount <= 0 || isNaN(amount)) {
      console.log("Nominal tidak valid");
      return;
    }
    account.balance += amount;
    account.transactions.push(`Deposit: +${amount}`);
    console.log("Sedang memproses transaksi...");
    console.log("Setoran berhasil. Saldo Anda sekarang: " + account.balance);
    return true; // Mengembalikan true jika setoran berhasil dilakukan
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return false; // Mengembalikan false jika terjadi kesalahan
  }
}

module.exports = { deposit };
