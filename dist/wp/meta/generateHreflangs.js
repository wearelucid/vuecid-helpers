"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateHreflangs;

var _removeHomeSlug = _interopRequireDefault(require("../../url/removeHomeSlug"));

var _verifyTrailingSlash = _interopRequireDefault(require("../../url/verifyTrailingSlash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates hreflangs for all translations of a post.
 *
 * More about the [hreflang attribute](https://moz.com/learn/seo/hreflang-tag).
 *
 * @param {Object} post
 * @param {Object} [post.polylang]
 * @param {Array} [post.polylang.translations]
 * @return {Array}
 */
function generateHreflangs(post) {
  var hreflangs = []; // Only generate alternates if there is more than one language

  if (post.polylang && post.polylang.translations && post.polylang.translations.length > 1) {
    post.polylang.translations.map(function (t) {
      var hreflang = {
        rel: 'alternate',
        hreflang: t.lang,
        href: (0, _verifyTrailingSlash.default)((0, _removeHomeSlug.default)(t.permalink))
      };
      hreflangs.push(hreflang);
    });
  }

  return hreflangs;
}