'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeHtmlEntity;
/**
 * Decode unicode characters.
 *
 * Inspired by this gist: https://gist.github.com/CatTail/4174511
 */

function decodeHtmlEntity(str) {
  if (str && typeof str === 'string') {
    return str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
  }
}