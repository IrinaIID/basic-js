const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   if (!Array.isArray(arr)) {return Error('\'arr\' parameter must be an instance of the Array!')};
   if (arr.length ===0) {return []}

   let result = [];
   let index;
   let type;
   arr.forEach(elem => {
     if(typeof elem === 'string') {
       index = arr.indexOf(elem);
       if (elem === '--discard-next') {type = 1}
       if (elem === '--discard-prev') {type = 2}
       if (elem === '--double-next') {type = 3}
       if (elem === '--double-prev') {type = 4}
     }
   })

   if (type === 1) {
     arr.forEach (function(e, ind) {
       if(!ind === index && !ind === index + 1) {
        result.push(e)
       }
     })
   }

   if (type === 2) {
    arr.forEach (function(e, ind) {
      if(!ind === index && !ind === index - 1) {
       result.push(e)
      }
    })
  }

  if (type === 3) {
    arr.forEach (function(e, ind) {
      if(ind === index + 1) {
        result.push(e * 2)
       }
      if(!ind === index && !ind === index + 1) {
       result.push(e)
      }
    })
  }

  if (type === 4) {
    arr.forEach (function(e, ind) {
      if(ind === index - 1) {
        result.push(e * 2)
       }
      if(!ind === index && !ind === index - 1) {
       result.push(e)
      }
    })
  }

return result

}

module.exports = {
  transform
};
