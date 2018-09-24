"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateRoutesFromData;

var _getPathFromUrl = _interopRequireDefault(require("../url/getPathFromUrl"));

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
    bundle: ''
  };

  var _postTypes = options.postTypes.map(function (pt) {
    return pt.type;
  }); // Save data JSON files


  var localizedJson = options.langs.map(function (l) {
    return loadLocalizedJson("".concat(options.dataPath, "/").concat(options.bundle), l.slug);
  }); // Get path from url for each post type from locaized JSON and make an array :-)

  var langRoutes = _postTypes.reduce(function (acc, type) {
    return _toConsumableArray(acc).concat(_toConsumableArray(localizedJson.map(function (l) {
      return l[type].map(function (p) {
        return (0, _getPathFromUrl.default)(p.link);
      });
    })));
  }, []); // acc
  // Use root '/' for default lang


  var langRoutesRoot = options.langs.map(function (l) {
    return l.default ? '/' : l.slug;
  });
  return _toConsumableArray(langRoutesRoot).concat(_toConsumableArray(langRoutes.reduce(function (acc, cur) {
    return _toConsumableArray(acc).concat(_toConsumableArray(cur));
  })));
}