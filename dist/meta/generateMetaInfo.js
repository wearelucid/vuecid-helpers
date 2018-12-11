"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMetaInfo;

var _generateMetaImageInfo = _interopRequireDefault(require("./generateMetaImageInfo"));

var _generateHreflangs = _interopRequireDefault(require("./generateHreflangs"));

var _removeTrailingSlash = _interopRequireDefault(require("../url/removeTrailingSlash"));

var _removeLeadingSlash = _interopRequireDefault(require("../url/removeLeadingSlash"));

var _verifyTrailingSlash = _interopRequireDefault(require("../url/verifyTrailingSlash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Generate meta info.
 *
 * hid in meta tags is needed to prevent duplicate properties
 * https://nuxtjs.org/faq/duplicated-meta-tags/
 * also they have to override nuxt.configs manifest infos, which sets an hid
 * therefore the og:description hid has to be called 'hid: "og:description"' and so on
 */
function generateMetaInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$siteSettings = _ref.siteSettings,
      siteSettings = _ref$siteSettings === void 0 ? {} : _ref$siteSettings,
      _ref$post = _ref.post,
      post = _ref$post === void 0 ? {} : _ref$post,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? '' : _ref$path,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? '' : _ref$locale,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug,
      _ref$titlePattern = _ref.titlePattern,
      titlePattern = _ref$titlePattern === void 0 ? true : _ref$titlePattern,
      _ref$titlePatternSepa = _ref.titlePatternSeparator,
      titlePatternSeparator = _ref$titlePatternSepa === void 0 ? '|' : _ref$titlePatternSepa;

  // Check if we have all required data
  if (!siteSettings || !siteSettings.global || !siteSettings.global.meta_global_site_settings) throw new Error('siteSettings and siteSettings.global.meta_global_site_settings are required');
  if (!post) throw new Error('post is required');
  if (!path) throw new Error('path is required');
  if (!locale) throw new Error('locale is required');

  var _siteSettings = _objectSpread({
    meta_site_name: '',
    meta_description_default: '',
    website_url: ''
  }, siteSettings.global.meta_global_site_settings, siteSettings.localized); // Site Name: Use site settings


  var siteName = _siteSettings.meta_site_name; // Title: Use post meta title or fallback to post title

  var title = post.meta_title ? post.meta_title : post.title || ''; // Description: Use post meta description or fallback to site settings

  var description = post.meta_description ? post.meta_description : _siteSettings.meta_description_default; //  Canonical: Construct canonical and ensure we don't mess up the slashes

  var canonicalUrl = "".concat((0, _verifyTrailingSlash.default)(_siteSettings.meta_website_url)).concat((0, _removeLeadingSlash.default)((0, _removeTrailingSlash.default)(path)));
  var metaInfo = {
    title: titlePattern ? "".concat(title).concat(titlePatternSeparator).concat(siteName) : siteName,
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
    }, {
      hid: 'og:title',
      property: 'og:title',
      content: title
    }, {
      hid: 'og:description',
      property: 'og:description',
      content: description
    }, {
      hid: 'og:url',
      property: 'og:url',
      content: canonicalUrl
    }, {
      hid: 'og:type',
      property: 'og:type',
      content: 'website'
    }, {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: siteName
    }, {
      hid: 'og:locale',
      property: 'og:locale',
      content: locale
    }, {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title
    }, {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description
    }, {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: _siteSettings.meta_publisher_twitter_handle
    }, {
      hid: 'fb:admins',
      property: 'fb:admins',
      content: _siteSettings.meta_facebook_admins_id
    }].concat(_toConsumableArray((0, _generateMetaImageInfo.default)({
      siteSettings: _siteSettings,
      post: post
    }))),
    link: [{
      rel: 'canonical',
      href: canonicalUrl
    }].concat(_toConsumableArray((0, _generateHreflangs.default)(post))) // Log output

  };

  if (debug) {
    console.table(metaInfo);
    console.table(metaInfo.meta);
    console.table(metaInfo.link);
  }

  return metaInfo;
}