'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanSlug;

var _removeTrailingSlash = require('./removeTrailingSlash');

var _removeTrailingSlash2 = _interopRequireDefault(_removeTrailingSlash);

var _removeLeadingSlash = require('./removeLeadingSlash');

var _removeLeadingSlash2 = _interopRequireDefault(_removeLeadingSlash);

var _removeLeadingLang = require('./removeLeadingLang');

var _removeLeadingLang2 = _interopRequireDefault(_removeLeadingLang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the naked slug without any slashes or locales.
 */

function cleanSlug(string) {
  return (0, _removeLeadingLang2.default)((0, _removeLeadingSlash2.default)((0, _removeTrailingSlash2.default)(string)));
}