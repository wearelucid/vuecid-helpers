'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeHomeSlugFromPermalink;

var _removeTrailingSlash = require('./removeTrailingSlash');

var _removeTrailingSlash2 = _interopRequireDefault(_removeTrailingSlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Remove 'home' from url.
 *
 * @example
 *
 * removeHomeSlugFromPermalink('https://www.mysite.com/home/')
 * // -> 'https://www.mysite.com/'
 */

function removeHomeSlugFromPermalink(string) {
  var newString = (0, _removeTrailingSlash2.default)(string);
  if (newString.endsWith('home')) {
    return string.slice(0, -4);
  } else {
    return string;
  }
}