const { askQuestion } = require('./utils');
const { user } = require('./user');
const { validatePin } = require('./validatePin');
const { validateCardNumber } = require('./validateCardNumber');
const { accounts } = require('./accounts');

async function login() {
    try {
        let cardNumber = await askQuestion('Masukkan card number: ');
        const accKey = validateCardNumber(cardNumber);
      
        let pin = await askQuestion('Masukkan PIN: ');
        validatePin(pin, accKey);
        // Save user login
    
        console.log(`Selamat datang, ${accounts[accKey].name}!`);
        return accKey;    
    } catch (err) {
        throw err;
    }
}

module.exports = { login };