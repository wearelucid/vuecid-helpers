'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanString = exports.verifyLeadingSlash = exports.removeTrailingSlash = exports.removeLeadingSlash = exports.removeLeadingLang = exports.removeHomeSlugFromPermalink = exports.getPathFromUrl = exports.cleanSlug = exports.checkIsHome = exports.checkIfWordPressPreview = exports.checkIfSlugIsHome = exports.generateMetaInfo = exports.reduceBundle = exports.decodeTitle = exports.removeFieldsFromPost = exports.normalizeWordpress = exports.flattenACF = exports.applyToOneOrMany = exports.getPageOrPostLinkFromLang = undefined;

var _getPageOrPostLinkFromLang = require('./data/getPageOrPostLinkFromLang');

var _getPageOrPostLinkFromLang2 = _interopRequireDefault(_getPageOrPostLinkFromLang);

var _applyToOneOrMany = require('./data/applyToOneOrMany');

var _applyToOneOrMany2 = _interopRequireDefault(_applyToOneOrMany);

var _flattenACF = require('./data/flattenACF');

var _flattenACF2 = _interopRequireDefault(_flattenACF);

var _normalizeWordpress = require('./data/normalizeWordpress');

var _normalizeWordpress2 = _interopRequireDefault(_normalizeWordpress);

var _removeFieldsFromPost = require('./data/removeFieldsFromPost');

var _removeFieldsFromPost2 = _interopRequireDefault(_removeFieldsFromPost);

var _decodeTitle = require('./data/decodeTitle');

var _decodeTitle2 = _interopRequireDefault(_decodeTitle);

var _reduceBundle = require('./data/reduceBundle');

var _reduceBundle2 = _interopRequireDefault(_reduceBundle);

var _generateMetaInfo = require('./meta/generateMetaInfo');

var _generateMetaInfo2 = _interopRequireDefault(_generateMetaInfo);

var _checkIfSlugIsHome = require('./url/checkIfSlugIsHome');

var _checkIfSlugIsHome2 = _interopRequireDefault(_checkIfSlugIsHome);

var _checkIfWordPressPreview = require('./url/checkIfWordPressPreview');

var _checkIfWordPressPreview2 = _interopRequireDefault(_checkIfWordPressPreview);

var _checkIsHome = require('./url/checkIsHome');

var _checkIsHome2 = _interopRequireDefault(_checkIsHome);

var _cleanSlug = require('./url/cleanSlug');

var _cleanSlug2 = _interopRequireDefault(_cleanSlug);

var _getPathFromUrl = require('./url/getPathFromUrl');

var _getPathFromUrl2 = _interopRequireDefault(_getPathFromUrl);

var _removeHomeSlugFromPermalink = require('./url/removeHomeSlugFromPermalink');

var _removeHomeSlugFromPermalink2 = _interopRequireDefault(_removeHomeSlugFromPermalink);

var _removeLeadingLang = require('./url/removeLeadingLang');

var _removeLeadingLang2 = _interopRequireDefault(_removeLeadingLang);

var _removeLeadingSlash = require('./url/removeLeadingSlash');

var _removeLeadingSlash2 = _interopRequireDefault(_removeLeadingSlash);

var _removeTrailingSlash = require('./url/removeTrailingSlash');

var _removeTrailingSlash2 = _interopRequireDefault(_removeTrailingSlash);

var _verifyLeadingSlash = require('./url/verifyLeadingSlash');

var _verifyLeadingSlash2 = _interopRequireDefault(_verifyLeadingSlash);

var _cleanString = require('./misc/cleanString');

var _cleanString2 = _interopRequireDefault(_cleanString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Meta data utilities
exports.getPageOrPostLinkFromLang = _getPageOrPostLinkFromLang2.default;
exports.applyToOneOrMany = _applyToOneOrMany2.default;
exports.flattenACF = _flattenACF2.default;
exports.normalizeWordpress = _normalizeWordpress2.default;
exports.removeFieldsFromPost = _removeFieldsFromPost2.default;
exports.decodeTitle = _decodeTitle2.default;
exports.reduceBundle = _reduceBundle2.default;
exports.generateMetaInfo = _generateMetaInfo2.default;
exports.checkIfSlugIsHome = _checkIfSlugIsHome2.default;
exports.checkIfWordPressPreview = _checkIfWordPressPreview2.default;
exports.checkIsHome = _checkIsHome2.default;
exports.cleanSlug = _cleanSlug2.default;
exports.getPathFromUrl = _getPathFromUrl2.default;
exports.removeHomeSlugFromPermalink = _removeHomeSlugFromPermalink2.default;
exports.removeLeadingLang = _removeLeadingLang2.default;
exports.removeLeadingSlash = _removeLeadingSlash2.default;
exports.removeTrailingSlash = _removeTrailingSlash2.default;
exports.verifyLeadingSlash = _verifyLeadingSlash2.default;
exports.cleanString = _cleanString2.default;

// Misc utilities


// Url utilities
// Data utilities