'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeTitle;

var _applyToOneOrMany = require('./applyToOneOrMany');

var _applyToOneOrMany2 = _interopRequireDefault(_applyToOneOrMany);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Delete fields we don't need (anymore)
*/
function decodeTitle(data) {
  return (0, _applyToOneOrMany2.default)(_decodeTitle, data);
}

function _decodeTitle(data) {
  data.title = decodeHtmlEntity(data.title);
  return data;
}

function decodeHtmlEntity(str) {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  });
}