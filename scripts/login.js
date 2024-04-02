const { askQuestion } = require('./utils');
const { user } = require('./user');
const { validatePin } = require('./validatePin');
const { validateCardNumber } = require('./validateCardNumber');

async function login() {
    let cardNumber = await askQuestion('Masukkan card number: ');
    let pin = await askQuestion('Masukkan PIN: ');
  
    // Validation
    // Cek CardNumber & PIN
    // Save user login
    
    console.log('Username:');
}

module.exports = { login };