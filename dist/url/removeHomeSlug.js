"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeHomeSlug;

var _removeTrailingSlash = _interopRequireDefault(require("./removeTrailingSlash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Remove 'home' from url.
 *
 * @param  {string} str
 * @param  {string} [homeSlug]
 * @return {string}
 *
 * @example
 *
 * removeHomeSlug('https://www.mysite.com/home/')
 * // -> 'https://www.mysite.com/'
 */
function removeHomeSlug(str) {
  var homeSlug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'home';

  if (typeof str === 'string' || str instanceof String) {
    var _str = str !== '/' ? (0, _removeTrailingSlash.default)(str) : '/';

    if (_str.endsWith(homeSlug)) {
      _str = _str.replace(homeSlug, '');
    }

    return _str;
  } else {
    // eslint-disable-next-line no-console
    console.warn('removeHomeSlug(): Please give me a string!');
    return str;
  }
}