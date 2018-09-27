"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkAndGetHomeSlug;

var _checkIsHome = _interopRequireDefault(require("./checkIsHome"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns homeSlug if we are on home, e.g. '/en/' or '/en' or '/'
 */
function checkAndGetHomeSlug(path, locale) {
  var homeSlug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'home';

  if ((0, _checkIsHome.default)(path, locale)) {
    return homeSlug;
  } else {
    return path;
  }
}