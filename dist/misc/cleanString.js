"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanString;

var _lodash = _interopRequireDefault(require("lodash.deburr"));

var _lodash2 = _interopRequireDefault(require("lodash.lowercase"));

var _lodash3 = _interopRequireDefault(require("lodash.kebabcase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clean a string: deburr, lowercase and kebabcase it. This is good to generate ids.
 *
 * @param  {string} str - A dirty string
 * @return {string} A clean string
 *
 * @example
 *
 * cleanString('Some sting äöü')
 * // -> 'some-sting-aou'
 */
function cleanString(str) {
  if (str && typeof str === 'string') {
    // Strip HTML tags
    str.replace(/<\/?[^>]+(>|$)/g, '');
    return (0, _lodash3.default)((0, _lodash2.default)((0, _lodash.default)(str)));
  } else {
    // eslint-disable-next-line no-console
    console.error('cleanString() – Please give me a string');
    return str;
  }
}