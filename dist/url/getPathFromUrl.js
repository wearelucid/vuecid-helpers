"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPathFromUrl;

var _verifyLeadingSlash = _interopRequireDefault(require("./verifyLeadingSlash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Regex to get the path from url. Makes sure that there is a leading slash.
 * https://regex101.com/r/uMOB5V/2/
 *
 * @example
 *
 * getPathFromUrl('https://www.mysite.com/en/myslug/')
 * // -> '/en/myslug/'
 */
function getPathFromUrl(string) {
  var regex = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/;
  var str = string;
  var subst = "$3";
  var result = str.replace(regex, subst);
  return (0, _verifyLeadingSlash.default)(result);
}