'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMetaInfo;

var _generateMetaTitle = require('./generateMetaTitle');

var _generateMetaTitle2 = _interopRequireDefault(_generateMetaTitle);

var _generateMetaDescription = require('./generateMetaDescription');

var _generateMetaDescription2 = _interopRequireDefault(_generateMetaDescription);

var _generateMetaImage = require('./generateMetaImage');

var _generateMetaImage2 = _interopRequireDefault(_generateMetaImage);

var _generateHreflangs = require('./generateHreflangs');

var _generateHreflangs2 = _interopRequireDefault(_generateHreflangs);

var _removeTrailingSlash = require('../url/removeTrailingSlash');

var _removeTrailingSlash2 = _interopRequireDefault(_removeTrailingSlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate meta info.
 *
 * TODO: Add config argument? Might be good for things like the title pattern/separator `${title} — ${siteName}`
 * TODO: Add more comments.
 */

function generateMetaInfo(options, post, locale, route) {
  var websiteUrl = options.global.website_url || 'website.url';
  var siteName = options.global.site_title || '';
  var ogSiteName = options.localized.og_site_name ? options.localized.og_site_name : siteName;
  var title = (0, _generateMetaTitle2.default)(options, post);
  var description = (0, _generateMetaDescription2.default)(options, post);
  var ogTitle = post && post.og_enabled && post.og_title ? post.og_title : title;
  var ogDescription = post && post.og_enabled && post.og_description ? post.og_description : description;
  var twitterHandle = options.site_twitter_handle || false;
  var image = (0, _generateMetaImage2.default)(options, post);
  var hreflangs = (0, _generateHreflangs2.default)(post, websiteUrl);
  var canonicalUrl = websiteUrl + (0, _removeTrailingSlash2.default)(route);

  var metaInfo = {
    title: title + ' \u2014 ' + siteName,
    htmlAttrs: {
      lang: locale
    },
    meta: [{ name: 'application-name', content: siteName }, { name: 'description', content: description },
    // { name: 'keywords', content: post.keywords },
    { rel: 'og:locale', content: locale }, { property: 'og:title', content: ogTitle }, { property: 'og:description', content: ogDescription }, { property: 'og:url', content: canonicalUrl }, { property: 'og:type', content: 'website' }, { property: 'og:site_name', content: ogSiteName }, { property: 'og:locale', content: locale }, { name: 'twitter:title', content: ogTitle }, { name: 'twitter:description', content: ogDescription }],
    link: [{ rel: 'canonical', href: canonicalUrl
      // { rel:'alternate', hreflang='en', href='#'}
    }].concat(hreflangs) // merge with hreflangs
  };

  if (twitterHandle) {
    metaInfo.meta.push({ name: 'twitter:site', content: twitterHandle });
  }

  if (image) {
    metaInfo.meta.push({ property: 'og:image', content: image }, { name: 'twitter:image', content: image }, { name: 'twitter:card', content: 'summary_large_image' });
  }

  return metaInfo;
}