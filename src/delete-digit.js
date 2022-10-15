const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


  const arr = Array.from(n.toString());
  const delArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let numArr = [];
    arr.forEach((elem, index) => {
      if(index !== i) {numArr.push(elem)}
    })
    delArr.push(+numArr.join(''))
  }

  delArr.sort((a, b) => {
    b - a
  })

  return delArr[0]


}

module.exports = {
  deleteDigit
};
