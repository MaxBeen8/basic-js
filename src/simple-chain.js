const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  constructor() {
    this.chain = [];
  },

  getLength() {
    return this.chain.length
  },
  
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.unshift(value)
    } else if (value === null) {
      this.chain.push('null')
    } else {
      this.chain.push(value)  
    }
    return this
  },
  
  removeLink(position) {
    position--;
    if (!Number.isInteger(position) || position < 0 || position >= this.chain.length) {
      this.constructor()
      throw new Error('You can\'t remove incorrect link!')
    }

    this.chain.splice(position, 1)
    return this
  },

  reverseChain() {
    this.chain.reverse();
    return this
  },
  
  finishChain() {
    let finishedChain = '( ' + this.chain.join(' )~~( ') + ' )';
    this.constructor();
    return finishedChain
  }
};

module.exports = {
  chainMaker
};
