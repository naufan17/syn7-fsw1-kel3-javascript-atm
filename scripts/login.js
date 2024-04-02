const { askQuestion } = require('./utils');
const { user } = require('./user');
const { validatePin } = require('./validatePin');
const { validateCardNumber } = require('./validateCardNumber');

async function login() {
    let cardNumber = await askQuestion('Masukkan card number: ');
    let pin = await askQuestion('Masukkan PIN: ');
  
    // Cek CardNumber & PIN
    const account = validateCardNumber();
    validatePin(pin, account);
    // Save user login
    
    console.log('Username:');
}

module.exports = { login };