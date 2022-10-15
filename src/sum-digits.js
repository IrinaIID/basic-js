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

    // console.log(arrNumers)


  function sum(x) {
      let total;
    let res = x.reduce((acc, elem) => {
      return acc + elem;
    }, 0);
      // console.log(res)
    let res2 = res.toString().split('');
      console.log(res2)
    let res3 = res2.map(elem => { return +elem});
      // console.log(res3)
      if(res3.length === 1) {total = res3}
      else {sum(res3)}
      return total

  }

  let result = sum(arrNumers)
  return sum(arrNumers)

}

module.exports = {
  getSumOfDigits
};
