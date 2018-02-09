'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanString;

var _lodash = require('lodash.deburr');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.lowercase');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.kebabcase');

var _lodash6 = _interopRequireDefault(_lodash5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cleanString() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // Strip HTML tags
  string = string.replace(/<\/?[^>]+(>|$)/g, '');
  return (0, _lodash6.default)((0, _lodash4.default)((0, _lodash2.default)(string)));
} /**
   * Clean a string
   */