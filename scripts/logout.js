const { rl } = require('./utils');

function logout() {
    console.log("Telah Berhasil Keluar, Terima kasih")
    rl.close();
}

module.exports = { logout };