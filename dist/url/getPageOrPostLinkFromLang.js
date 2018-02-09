'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPageOrPostLinkFromLang;

var _getPathFromUrl = require('./getPathFromUrl');

var _getPathFromUrl2 = _interopRequireDefault(_getPathFromUrl);

var _verifyLeadingSlash = require('./verifyLeadingSlash');

var _verifyLeadingSlash2 = _interopRequireDefault(_verifyLeadingSlash);

var _removeHomeSlugFromPermalink = require('./removeHomeSlugFromPermalink');

var _removeHomeSlugFromPermalink2 = _interopRequireDefault(_removeHomeSlugFromPermalink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the path of the translation from a page or post object.
 */

function navigationToHome(lang, defaultLang) {
  return lang === defaultLang ? '/' : '/' + lang;
}

function getPageOrPostLinkFromLang(post, lang, defaultLang) {
  if (post && post.polylang && post.polylang.translations) {
    var translation = post.polylang.translations.find(function (t) {
      return t.lang === lang;
    });
    if (translation) {
      var link = '' + (0, _verifyLeadingSlash2.default)((0, _getPathFromUrl2.default)((0, _removeHomeSlugFromPermalink2.default)(translation.permalink)));
      return link;
    } else {
      return navigationToHome(lang, defaultLang);
    }
  } else {
    return navigationToHome(lang, defaultLang);
  }
}