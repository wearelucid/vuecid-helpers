"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateRoutesFromData;

var _getPathFromUrl = _interopRequireDefault(require("../url/getPathFromUrl"));

var _verifyTrailingSlash = _interopRequireDefault(require("../url/verifyTrailingSlash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Load JSON file
function loadLocalizedJson(path, lang) {
  return require("".concat(path, ".").concat(lang, ".json"));
}

function generateRoutesFromData() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    langs: [],
    postTypes: {},
    dataPath: '',
    bundle: '',
    homeSlug: 'home',
    errorPrefix: 'error-'
  };

  // Get an array of post types, something like [ 'pages', 'posts' ]
  var _postTypes = options.postTypes.map(function (pt) {
    return pt.type;
  }); // Load and save localized option JSON's, includes all pages and posts of our languages, something we can work with :)


  var localizedJson = options.langs.map(function (l) {
    return loadLocalizedJson("".concat(options.dataPath, "/").concat(options.bundle), l.slug);
  }); // Get path from url for each post type from locaized JSON and make an array :-)

  var langRoutes = _postTypes.reduce(function (acc, type) {
    return _toConsumableArray(acc.map(function (l) {
      var f = l // Kick out all the pages containing the home slug
      // This could also delete a page that contains a string linke '…/home…'
      // maybe a page with the permalink /pages/something/home-sweet-home
      // Sadly this step is necessary since we can not redirect() with our middleware during generate
      .filter(function (s) {
        return !s.includes("/".concat(options.homeSlug));
      }) // Kick out error pages
      .filter(function (s) {
        return !s.includes("/".concat(options.errorPrefix));
      }); // Verify trailing slash so we don't get duplicate route generation

      return f.map(function (p) {
        return (0, _verifyTrailingSlash.default)(p);
      });
    })).concat(_toConsumableArray(localizedJson.map(function (l) {
      // Verify trailing slash so we don't get duplicate route generation
      return l[type].map(function (p) {
        return (0, _verifyTrailingSlash.default)((0, _getPathFromUrl.default)(p.link));
      });
    })));
  }, []); // acc
  // Use root '/' for default lang


  var langRoutesRoot = options.langs.map(function (l) {
    return l.default ? '/' : "/".concat(l.slug, "/");
  });
  return _toConsumableArray(langRoutesRoot).concat(_toConsumableArray(langRoutes.reduce(function (acc, cur) {
    return _toConsumableArray(acc).concat(_toConsumableArray(cur));
  })));
}