const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(boolean) {
    this.boolean = boolean
  }
  encrypt(message, key) {
    if (arguments.length > 2 || arguments.length < 2 || arguments[0] === undefined) {
      throw new Error('Incorrect arguments!') 
    }   

    let result = '';
    message = message.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i)
      if (c.length === 1 && c.match(/[a-zA-Z]/i)) {
        let upperLetter = ((c.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        result += String.fromCharCode(upperLetter + 65);
        j++;
      } else {
        result += c
      }
    }
    
    if (this.boolean === false) {
      return result.split('').reverse().join('')
    } else {
      return result;
    }
  
  }
  decrypt(message, key) {
    if (arguments.length > 2 || arguments.length < 2 || arguments[0] === undefined) {
      throw new Error('Incorrect arguments!') 
    }

    let result = ''
    message = message.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i)
      if (c.length === 1 && c.match(/[a-zA-Z]/i)) {
        let upperLetter = ((c.charCodeAt(0) - 65) - (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        result += String.fromCharCode(((upperLetter + 26) % 26) + 65);
        j++;
      } else {
        result += c
      }
    }
    
    if (this.boolean === false) {
      return result.split('').reverse().join('')
    } else {
      return result
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
