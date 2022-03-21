const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(bool) {
    this.alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    this.reverse = bool === false;
  }

  encrypt(message, key) {
    return this.crypt(message, key, 'encrypt');
  }

  decrypt(message, key) {
    return this.crypt(message, key, 'decrypt');
  }

  crypt(message, key, cryptType = 'encrypt') {
    if (message == undefined || key == undefined)
      throw new Error('Incorrect arguments!');

    message = message.toLowerCase();
    let newkey = this.getNormalizeKey(message, key);
    let maxLength = Math.max(message.length, newkey.length);
    let cryptValues = [];
    for (let i = 0; i < maxLength; i++) {
      let value = '';
      let keySum = '';
      let mj = this.getAlphabetPos(message[i]);
      let kj = this.getAlphabetPos(newkey[i]);
      if (mj >= 0) {
        if (cryptType == 'encrypt') {
          keySum = (mj + kj <= 26) ? mj + kj : mj + kj - 26;
        } else if (cryptType == 'decrypt') {
          keySum = ((mj - kj) < 0) ? mj + 26 - kj : mj - kj;
        }
        value = this.getLetterByPos(keySum).toUpperCase();
      } else {
        value = message[i];
      }

      cryptValues.push(value);
    }

    return this.reverse ? cryptValues.reverse().join('') : cryptValues.join('');
  }

  getNormalizeKey(message, key) {
    let newkey = '';
    let rli = 0;
    for (let i = 0; i < message.length; i++) {

      if (this.alphabet.includes(message[i].toLowerCase())) {
        newkey += key[rli];
      } else {
        newkey += message[i];
        rli -= 1;
      }

      rli = (rli == key.length - 1) ? 0 : rli + 1;
    }

    return newkey;
  }

  getAlphabetPos(letter) {
    if (this.alphabet.indexOf(letter.toLowerCase()) != -1) {
      return this.alphabet.indexOf(letter.toLowerCase()) ;
    }

    return -1;
  }

  getLetterByPos(index) {
    return index < 26 ? this.alphabet[index] : this.alphabet[index - 26];
  }
}

module.exports = VigenereCipheringMachine;
