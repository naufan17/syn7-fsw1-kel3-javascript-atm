const { askQuestion } = require('./utils');
const { user } = require('./user');
const { validatePin } = require('./validatePin');
const { validateCardNumber } = require('./validateCardNumber');

async function login() {
    try {
        let cardNumber = await askQuestion('Masukkan card number: ');      
        const account = validateCardNumber(cardNumber);

        let pin = await askQuestion('Masukkan PIN: ');
        validatePin(pin, account);

        console.log(`Selamat datang, ${account.name}!`);
        return account;
    } catch (err) {
        throw err;
    }
}

module.exports = { login };