const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = String(str);
  let add = '';

  if ( options.addition ) {
    add = String(options.addition);
    if ( options.additionSeparator && options.additionRepeatTimes ) {
      add += options.additionSeparator;
      add = add.repeat(options.additionRepeatTimes);
      let lengthSep = options.additionSeparator.length;
      add = add.slice(0, add.length - lengthSep);
    } else {
      if (options.additionRepeatTimes) {
        add += '|';
        add = add.repeat(options.additionRepeatTimes);
        add = add.slice(0, add.length - 1);
      }
    }
  }

  result += add;

  if(options.repeatTimes && options.separator) {
    result += options.separator;
    result = result.repeat(options.repeatTimes);
    let lengthSep = options.separator.length;
    result = result.slice(0, result.length - lengthSep);
  } else {
    if(options.repeatTimes) {
      result += '+';
      result = result.repeat(options.repeatTimes);
      result = result.slice(0, result.length - 1);
    }
  }

  return result

}

module.exports = {
  repeater
};
