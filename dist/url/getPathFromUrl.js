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
 * ⚠️ Subdomains don't work with this: https://regex101.com/r/uMOB5V/3/
 * getPathFromUrl('https://www.mysubdomain.mysite.com/en/myslug/') will not match the regex pattern...
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * getPathFromUrl('https://www.mysite.com/en/myslug/')
 * // -> '/en/myslug/'
 */
function getPathFromUrl(str) {
  var regex = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/;
  var _str = str;
  var subst = "$3";

  var result = _str.replace(regex, subst);

  return (0, _verifyLeadingSlash.default)(result);
}