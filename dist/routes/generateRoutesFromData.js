'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateRoutesFromData;

var _getPathFromUrl = require('../url/getPathFromUrl');

var _getPathFromUrl2 = _interopRequireDefault(_getPathFromUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Load JSON file
function loadLocalizedJson(path, lang) {
  return require(path + '.' + lang + '.json');
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
  });

  // Save data JSON files
  var localizedJson = options.langs.map(function (l) {
    return loadLocalizedJson(options.dataPath + '/' + options.bundle, l.slug);
  });

  // Get path from url for each post type from locaized JSON and make an array :-)
  var langRoutes = _postTypes.reduce(function (acc, type) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(localizedJson.map(function (l) {
      return l[type].map(function (p) {
        return (0, _getPathFromUrl2.default)(p.link);
      });
    })));
  }, []); // acc

  // Use root '/' for default lang
  var langRoutesRoot = options.langs.map(function (l) {
    return l.default ? '/' : l.slug;
  });

  return [].concat(_toConsumableArray(langRoutesRoot), _toConsumableArray(langRoutes.reduce(function (acc, cur) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(cur));
  })));
}