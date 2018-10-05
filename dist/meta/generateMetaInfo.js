"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMetaInfo;

var _generateMetaTitle = _interopRequireDefault(require("./generateMetaTitle"));

var _generateMetaDescription = _interopRequireDefault(require("./generateMetaDescription"));

var _generateMetaImage = _interopRequireDefault(require("./generateMetaImage"));

var _generateHreflangs = _interopRequireDefault(require("./generateHreflangs"));

var _removeTrailingSlash = _interopRequireDefault(require("../url/removeTrailingSlash"));

var _removeLeadingSlash = _interopRequireDefault(require("../url/removeLeadingSlash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate meta info.
 *
 * TODO: Add config argument? Might be good for things like the title pattern/separator `${title} — ${siteName}`
 * TODO: Add more comments.
 *
 * hid in meta tags is needed to prevent duplicate properties
 * https://nuxtjs.org/faq/duplicated-meta-tags/
 * also they have to override nuxt.configs manifest infos, which sets an hid
 * therefore the og:description hid has to be called 'hid: "og:description"' and so on
 */
function generateMetaInfo(options, post, locale, route) {
  var websiteUrl = options.global.website_url || 'website.url';
  var siteName = options.global.site_title || '';
  var ogSiteName = options.localized.og_site_name ? options.localized.og_site_name : siteName;
  var title = (0, _generateMetaTitle.default)(options, post);
  var description = (0, _generateMetaDescription.default)(options, post);
  var ogTitle = post && post.og_enabled && post.og_title ? post.og_title : title;
  var ogDescription = post && post.og_enabled && post.og_description ? post.og_description : description;
  var twitterHandle = options.site_twitter_handle || false;
  var image = (0, _generateMetaImage.default)(options, post);
  var hreflangs = (0, _generateHreflangs.default)(post, websiteUrl);
  var canonicalUrl = websiteUrl + (0, _removeLeadingSlash.default)((0, _removeTrailingSlash.default)(route));
  var metaInfo = {
    title: "".concat(title, " \u2014 ").concat(siteName),
    htmlAttrs: {
      lang: locale
    },
    meta: [{
      name: 'application-name',
      content: siteName
    }, {
      hid: 'description',
      name: 'description',
      content: description
    }, // { hid: 'keywords' name: 'keywords', content: post.keywords },
    {
      hid: 'og:locale',
      rel: 'og:locale',
      content: locale
    }, {
      hid: 'og:title',
      property: 'og:title',
      content: ogTitle
    }, {
      hid: 'og:description',
      property: 'og:description',
      content: ogDescription
    }, {
      hid: 'og:url',
      property: 'og:url',
      content: canonicalUrl
    }, {
      hid: 'og:type',
      property: 'og:type',
      content: 'website'
    }, {
      hid: 'og:site-name',
      property: 'og:site_name',
      content: ogSiteName
    }, {
      hid: 'og:locale',
      property: 'og:locale',
      content: locale
    }, {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: ogTitle
    }, {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: ogDescription
    }],
    link: [{
      rel: 'canonical',
      href: canonicalUrl // { rel:'alternate', hreflang='en', href='#'}

    }].concat(hreflangs) // merge with hreflangs

  };

  if (twitterHandle) {
    metaInfo.meta.push({
      name: 'twitter:site',
      content: twitterHandle
    });
  }

  if (image) {
    metaInfo.meta.push({
      hid: 'og:image',
      property: 'og:image',
      content: image
    }, {
      hid: 'twitter-image',
      name: 'twitter:image',
      content: image
    }, // make sure your backend crops the og image with this dimensions
    {
      hid: 'og:image:width',
      name: 'og:image:width',
      content: '1280'
    }, {
      hid: 'og:image:height',
      name: 'og:image:height',
      content: '720'
    }, {
      hid: 'twitter-card',
      name: 'twitter:card',
      content: 'summary_large_image'
    });
  }

  return metaInfo;
}