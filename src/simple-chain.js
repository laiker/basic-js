const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value !== undefined || value !== null) {
      this.chain.push('( ' + value + ' )');
    }
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    chainString = this.chain.join('~~');
    this.chain = [];
    return chainString;
  }
};

module.exports = chainMaker;
