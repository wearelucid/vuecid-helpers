"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateHreflangs;

var _removeHomeSlug = _interopRequireDefault(require("../url/removeHomeSlug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateHreflangs(post, url) {
  var hreflangs = [];

  if (post.polylang && post.polylang.translations) {
    post.polylang.translations.map(function (t) {
      var hreflang = {
        rel: 'alternate',
        hreflang: t.lang,
        href: (0, _removeHomeSlug.default)(t.permalink)
      };
      hreflangs.push(hreflang);
    });
  }

  return hreflangs;
}