'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeWordpress;

var _applyToOneOrMany = require('./applyToOneOrMany');

var _applyToOneOrMany2 = _interopRequireDefault(_applyToOneOrMany);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Normalize WordPress post object(s).
 */

function normalizeWordpress(data) {
  return (0, _applyToOneOrMany2.default)(_normalizeWordpressPost, data);
}

function _normalizeWordpressPost(post) {
  post.title = post.title.rendered;
  post.content = post.content.rendered;
  post.excerpt = post.excerpt ? post.excerpt.rendered : null;
  return post;
}