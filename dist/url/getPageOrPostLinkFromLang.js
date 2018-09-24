"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPageOrPostLinkFromLang;

var _getPathFromUrl = _interopRequireDefault(require("./getPathFromUrl"));

var _verifyLeadingSlash = _interopRequireDefault(require("./verifyLeadingSlash"));

var _removeHomeSlugFromPermalink = _interopRequireDefault(require("./removeHomeSlugFromPermalink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the path of the translation from a page or post object.
 */
function navigationTo404(lang, defaultLang) {
  return lang === defaultLang ? '/404' : "/".concat(lang, "/404");
}

function getPageOrPostLinkFromLang(post, lang, defaultLang) {
  if (post && post.polylang && post.polylang.translations) {
    var translation = post.polylang.translations.find(function (t) {
      return t.lang === lang;
    });

    if (translation) {
      var link = "".concat((0, _verifyLeadingSlash.default)((0, _getPathFromUrl.default)((0, _removeHomeSlugFromPermalink.default)(translation.permalink))));
      return link;
    } else {
      return navigationTo404(lang, defaultLang);
    }
  } else {
    return navigationTo404(lang, defaultLang);
  }
}