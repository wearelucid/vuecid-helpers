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
 * @example
 *
 * removeHomeSlug('https://www.mysite.com/home/') -> 'https://www.mysite.com/'
 *
 */
function removeHomeSlug(string) {
  var homeSlug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'home';

  if (typeof string === 'string' || string instanceof String) {
    var s = string !== '/' ? (0, _removeTrailingSlash.default)(string) : '/';

    if (s.endsWith(homeSlug)) {
      s = s.replace(homeSlug, '');
    }

    return s;
  } else {
    console.warn('removeHomeSlug(): Please give me a string!');
    return string;
  }
}