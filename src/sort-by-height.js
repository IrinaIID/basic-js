const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let arrWithout1 = [];

  arr.forEach(e => {
    if(e !== -1) {arrWithout1.push(e)}
  });

  arrWithout1.sort((a,b) => {return b - a});

  arr.forEach(e => {
    if(e !== -1) {
      result.push(arrWithout1[arrWithout1.length - 1]);
      arrWithout1.pop();
    } else {
      result.push(-1)
    }
  })

  return result

}

module.exports = {
  sortByHeight
};
