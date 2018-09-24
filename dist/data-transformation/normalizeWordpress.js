"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeWordpress;

var _applyToOneOrMany = _interopRequireDefault(require("./applyToOneOrMany"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Normalize WordPress post object(s).
 */
function normalizeWordpress(data) {
  return (0, _applyToOneOrMany.default)(_normalizeWordpressPost, data);
}

function _normalizeWordpressPost(post) {
  if (post === null || _typeof(post) !== 'object') {
    return post;
  } else {
    post.title = post.title.rendered;
    post.content = post.content.rendered;
    post.excerpt = post.excerpt ? post.excerpt.rendered : null;
    return post;
  }
}