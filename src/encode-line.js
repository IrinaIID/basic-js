const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (str === '') {return ''}
  let arrStr = str.split('');

  let stack = [arrStr[0]];
  let result = '';

  for(let i = 1; i <= arrStr.length; i++) {
    if (arrStr[i] === stack[stack.length - 1]) {
      stack.push(arrStr[i])
    } else {
      let num;
      if (stack.length === 1) {num = ''}
      else {num = stack.length}
      result = result + `${num}${arrStr[i - 1]}`
      stack = [arrStr[i]]
    }
  }
  return result

}

module.exports = {
  encodeLine
};
