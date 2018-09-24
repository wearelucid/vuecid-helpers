"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getData", {
  enumerable: true,
  get: function get() {
    return _getData.default;
  }
});
Object.defineProperty(exports, "getPreviewData", {
  enumerable: true,
  get: function get() {
    return _getPreviewData.default;
  }
});
Object.defineProperty(exports, "applyToOneOrMany", {
  enumerable: true,
  get: function get() {
    return _applyToOneOrMany.default;
  }
});
Object.defineProperty(exports, "flattenACF", {
  enumerable: true,
  get: function get() {
    return _flattenACF.default;
  }
});
Object.defineProperty(exports, "normalizeWordpress", {
  enumerable: true,
  get: function get() {
    return _normalizeWordpress.default;
  }
});
Object.defineProperty(exports, "removeFieldsFromPost", {
  enumerable: true,
  get: function get() {
    return _removeFieldsFromPost.default;
  }
});
Object.defineProperty(exports, "decodeTitle", {
  enumerable: true,
  get: function get() {
    return _decodeTitle.default;
  }
});
Object.defineProperty(exports, "reduceBundle", {
  enumerable: true,
  get: function get() {
    return _reduceBundle.default;
  }
});
Object.defineProperty(exports, "generateMetaInfo", {
  enumerable: true,
  get: function get() {
    return _generateMetaInfo.default;
  }
});
Object.defineProperty(exports, "checkIfSlugIsHome", {
  enumerable: true,
  get: function get() {
    return _checkIfSlugIsHome.default;
  }
});
Object.defineProperty(exports, "checkIfWordPressPreview", {
  enumerable: true,
  get: function get() {
    return _checkIfWordPressPreview.default;
  }
});
Object.defineProperty(exports, "checkIsHome", {
  enumerable: true,
  get: function get() {
    return _checkIsHome.default;
  }
});
Object.defineProperty(exports, "cleanSlug", {
  enumerable: true,
  get: function get() {
    return _cleanSlug.default;
  }
});
Object.defineProperty(exports, "getPageOrPostLinkFromLang", {
  enumerable: true,
  get: function get() {
    return _getPageOrPostLinkFromLang.default;
  }
});
Object.defineProperty(exports, "getPathFromUrl", {
  enumerable: true,
  get: function get() {
    return _getPathFromUrl.default;
  }
});
Object.defineProperty(exports, "removeHomeSlugFromPermalink", {
  enumerable: true,
  get: function get() {
    return _removeHomeSlugFromPermalink.default;
  }
});
Object.defineProperty(exports, "removeLeadingLang", {
  enumerable: true,
  get: function get() {
    return _removeLeadingLang.default;
  }
});
Object.defineProperty(exports, "removeLeadingSlash", {
  enumerable: true,
  get: function get() {
    return _removeLeadingSlash.default;
  }
});
Object.defineProperty(exports, "removeTrailingSlash", {
  enumerable: true,
  get: function get() {
    return _removeTrailingSlash.default;
  }
});
Object.defineProperty(exports, "verifyLeadingSlash", {
  enumerable: true,
  get: function get() {
    return _verifyLeadingSlash.default;
  }
});
Object.defineProperty(exports, "cleanString", {
  enumerable: true,
  get: function get() {
    return _cleanString.default;
  }
});
Object.defineProperty(exports, "decodeHtmlEntity", {
  enumerable: true,
  get: function get() {
    return _decodeHtmlEntity.default;
  }
});
Object.defineProperty(exports, "findPostInArray", {
  enumerable: true,
  get: function get() {
    return _findPostInArray.default;
  }
});
Object.defineProperty(exports, "generateLocalizedRoutes", {
  enumerable: true,
  get: function get() {
    return _generateLocalizedRoutes.default;
  }
});
Object.defineProperty(exports, "generateRoutesFromData", {
  enumerable: true,
  get: function get() {
    return _generateRoutesFromData.default;
  }
});

var _getData = _interopRequireDefault(require("./api/getData"));

var _getPreviewData = _interopRequireDefault(require("./api/getPreviewData"));

var _applyToOneOrMany = _interopRequireDefault(require("./data-transformation/applyToOneOrMany"));

var _flattenACF = _interopRequireDefault(require("./data-transformation/flattenACF"));

var _normalizeWordpress = _interopRequireDefault(require("./data-transformation/normalizeWordpress"));

var _removeFieldsFromPost = _interopRequireDefault(require("./data-transformation/removeFieldsFromPost"));

var _decodeTitle = _interopRequireDefault(require("./data-transformation/decodeTitle"));

var _reduceBundle = _interopRequireDefault(require("./data-transformation/reduceBundle"));

var _generateMetaInfo = _interopRequireDefault(require("./meta/generateMetaInfo"));

var _checkIfSlugIsHome = _interopRequireDefault(require("./url/checkIfSlugIsHome"));

var _checkIfWordPressPreview = _interopRequireDefault(require("./url/checkIfWordPressPreview"));

var _checkIsHome = _interopRequireDefault(require("./url/checkIsHome"));

var _cleanSlug = _interopRequireDefault(require("./url/cleanSlug"));

var _getPageOrPostLinkFromLang = _interopRequireDefault(require("./url/getPageOrPostLinkFromLang"));

var _getPathFromUrl = _interopRequireDefault(require("./url/getPathFromUrl"));

var _removeHomeSlugFromPermalink = _interopRequireDefault(require("./url/removeHomeSlugFromPermalink"));

var _removeLeadingLang = _interopRequireDefault(require("./url/removeLeadingLang"));

var _removeLeadingSlash = _interopRequireDefault(require("./url/removeLeadingSlash"));

var _removeTrailingSlash = _interopRequireDefault(require("./url/removeTrailingSlash"));

var _verifyLeadingSlash = _interopRequireDefault(require("./url/verifyLeadingSlash"));

var _cleanString = _interopRequireDefault(require("./misc/cleanString"));

var _decodeHtmlEntity = _interopRequireDefault(require("./misc/decodeHtmlEntity"));

var _findPostInArray = _interopRequireDefault(require("./misc/findPostInArray"));

var _generateLocalizedRoutes = _interopRequireDefault(require("./routes/generateLocalizedRoutes"));

var _generateRoutesFromData = _interopRequireDefault(require("./routes/generateRoutesFromData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }