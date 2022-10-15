const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const symbols = '0123456789ABCDEF'
  let res = [];
  const arr = n.split('-');
  arr.forEach(elem => {
    if(elem.length !== 2) {return res.push(1)}
    let arr2 = elem.split('');
    if (!symbols.includes(arr2[0]) || !symbols.includes(arr2[1])) {res.push(1)}
  });
  if(res.length > 0) {return false}
  return true
}

module.exports = {
  isMAC48Address
};
