'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeTitle;

var _applyToOneOrMany = require('./applyToOneOrMany');

var _applyToOneOrMany2 = _interopRequireDefault(_applyToOneOrMany);

var _decodeHtmlEntity = require('../misc/decodeHtmlEntity');

var _decodeHtmlEntity2 = _interopRequireDefault(_decodeHtmlEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Data transformation to decode any unicode characters in the title property.
 */

function decodeTitle(data) {
  return (0, _applyToOneOrMany2.default)(_decodeTitle, data);
}

function _decodeTitle(data) {
  if (data.hasOwnProperty('title')) {
    data.title = (0, _decodeHtmlEntity2.default)(data.title);
  }
  return data;
}