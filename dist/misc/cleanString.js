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
 * @example
 *
 * cleanString('Some sting äöü')
 * // -> 'some-sting-aou'
 */
function cleanString() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  // Strip HTML tags
  string = string.replace(/<\/?[^>]+(>|$)/g, '');
  return (0, _lodash3.default)((0, _lodash2.default)((0, _lodash.default)(string)));
}