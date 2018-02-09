'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeFieldsFromPost;

var _applyToOneOrMany = require('./applyToOneOrMany');

var _applyToOneOrMany2 = _interopRequireDefault(_applyToOneOrMany);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Delete fields we don't need (anymore)
*/
function removeFieldsFromPost(data) {
  return (0, _applyToOneOrMany2.default)(_removeFieldsFromPost, data);
}

function _removeFieldsFromPost(data) {
  delete data._links;
  return data;
}