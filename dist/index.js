"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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
Object.defineProperty(exports, "applyToOneOrMany", {
  enumerable: true,
  get: function get() {
    return _applyToOneOrMany.default;
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
Object.defineProperty(exports, "checkAndGetHomeSlug", {
  enumerable: true,
  get: function get() {
    return _checkAndGetHomeSlug.default;
  }
});
Object.defineProperty(exports, "isHomeSlug", {
  enumerable: true,
  get: function get() {
    return _isHomeSlug.default;
  }
});
Object.defineProperty(exports, "isHome", {
  enumerable: true,
  get: function get() {
    return _isHome.default;
  }
});
Object.defineProperty(exports, "cleanSlug", {
  enumerable: true,
  get: function get() {
    return _cleanSlug.default;
  }
});
Object.defineProperty(exports, "getPathFromUrl", {
  enumerable: true,
  get: function get() {
    return _getPathFromUrl.default;
  }
});
Object.defineProperty(exports, "removeHomeSlug", {
  enumerable: true,
  get: function get() {
    return _removeHomeSlug.default;
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
Object.defineProperty(exports, "verifyTrailingSlash", {
  enumerable: true,
  get: function get() {
    return _verifyTrailingSlash.default;
  }
});

var _cleanString = _interopRequireDefault(require("./misc/cleanString"));

var _decodeHtmlEntity = _interopRequireDefault(require("./misc/decodeHtmlEntity"));

var _applyToOneOrMany = _interopRequireDefault(require("./data-transformation/applyToOneOrMany"));

var _generateLocalizedRoutes = _interopRequireDefault(require("./routes/generateLocalizedRoutes"));

var _generateRoutesFromData = _interopRequireDefault(require("./routes/generateRoutesFromData"));

var _checkAndGetHomeSlug = _interopRequireDefault(require("./url/checkAndGetHomeSlug"));

var _isHomeSlug = _interopRequireDefault(require("./url/isHomeSlug"));

var _isHome = _interopRequireDefault(require("./url/isHome"));

var _cleanSlug = _interopRequireDefault(require("./url/cleanSlug"));

var _getPathFromUrl = _interopRequireDefault(require("./url/getPathFromUrl"));

var _removeHomeSlug = _interopRequireDefault(require("./url/removeHomeSlug"));

var _removeLeadingLang = _interopRequireDefault(require("./url/removeLeadingLang"));

var _removeLeadingSlash = _interopRequireDefault(require("./url/removeLeadingSlash"));

var _removeTrailingSlash = _interopRequireDefault(require("./url/removeTrailingSlash"));

var _verifyLeadingSlash = _interopRequireDefault(require("./url/verifyLeadingSlash"));

var _verifyTrailingSlash = _interopRequireDefault(require("./url/verifyTrailingSlash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }