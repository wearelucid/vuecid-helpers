"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanSlug;

var _removeTrailingSlash = _interopRequireDefault(require("./removeTrailingSlash"));

var _removeLeadingSlash = _interopRequireDefault(require("./removeLeadingSlash"));

var _removeLeadingLang = _interopRequireDefault(require("./removeLeadingLang"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the naked slug without any slashes or locales.
 *
 * @param  {string} str
 * @return {string}
 *
 */
function cleanSlug(str) {
  return (0, _removeLeadingLang.default)((0, _removeLeadingSlash.default)((0, _removeTrailingSlash.default)(str)));
}