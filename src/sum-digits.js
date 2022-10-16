const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arr = n.toString().split('');
  let arrNumers = [];

  arr.forEach(e => {
    arrNumers.push(+e)
  })


  function sum(x) {
    if (x.length === 1) {return x[0]}
    let sum = x.reduce((acc, elem) => {
      return acc + elem;
    }, 0);
    let arrSum = sum.toString().split('');
    sum(arrSum)
  }

  return sum(arrNumers)

}

module.exports = {
  getSumOfDigits
};
