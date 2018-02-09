'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateHreflangs;

var _removeHomeSlugFromPermalink = require('../url/removeHomeSlugFromPermalink');

var _removeHomeSlugFromPermalink2 = _interopRequireDefault(_removeHomeSlugFromPermalink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateHreflangs(post, url) {
  var hreflangs = [];

  if (post.polylang && post.polylang.translations) {
    post.polylang.translations.map(function (t) {
      var hreflang = {
        rel: 'alternate',
        hreflang: t.lang,
        href: (0, _removeHomeSlugFromPermalink2.default)(t.permalink)
      };
      hreflangs.push(hreflang);
    });
  }
  return hreflangs;
}