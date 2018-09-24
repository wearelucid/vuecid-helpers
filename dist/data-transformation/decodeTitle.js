"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeTitle;

var _applyToOneOrMany = _interopRequireDefault(require("./applyToOneOrMany"));

var _decodeHtmlEntity = _interopRequireDefault(require("../misc/decodeHtmlEntity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Data transformation to decode any unicode characters in the title property.
 */
function decodeTitle(data) {
  return (0, _applyToOneOrMany.default)(_decodeTitle, data);
}

function _decodeTitle(data) {
  if (data.hasOwnProperty('title')) {
    data.title = (0, _decodeHtmlEntity.default)(data.title);
  }

  return data;
}