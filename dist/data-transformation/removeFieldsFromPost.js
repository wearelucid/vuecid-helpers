"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeFieldsFromPost;

var _applyToOneOrMany = _interopRequireDefault(require("./applyToOneOrMany"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Delete fields we don't need (anymore).
 */
function removeFieldsFromPost(data) {
  return (0, _applyToOneOrMany.default)(_removeFieldsFromPost, data);
}

function _removeFieldsFromPost(data) {
  delete data._links;
  return data;
}