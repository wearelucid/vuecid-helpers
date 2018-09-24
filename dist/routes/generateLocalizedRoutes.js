"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateLocalizedRoutes;

var _lodash = _interopRequireDefault(require("lodash.has"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Generate localized routes using Nuxt's generated routes and i18n config
 * @param  {Object} options Options
 * @return {Array}          Localized routes to be used in Nuxt config
 */
function generateLocalizedRoutes() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    baseRoutes: [],
    defaultLang: '',
    langs: [],
    routesAliases: {}
  };
  var localizedRoutes = []; // Loop through all generated routes

  options.baseRoutes.forEach(function (baseRoute) {
    // Loop through all configured languages
    options.langs.forEach(function (lang) {
      // Get values from baseRoute
      var component = baseRoute.component;
      var path = baseRoute.path,
          name = baseRoute.name,
          children = baseRoute.children; // Recursively generate routes for all children if there are any

      if (children) {
        children = generateLocalizedRoutes(children, [lang]);
      } // Handle route aliases


      if ((0, _lodash.default)(options.routesAliases, "".concat(name, ".").concat(lang.slug))) {
        path = options.routesAliases[name][lang.slug];
      } // Prefix path with lang slug if not default lang


      if (lang.lang !== options.defaultLang) {
        // Add leading / if needed (ie. children routes)
        if (path.match(/^\//) === null) {
          path = "/".concat(path);
        }

        path = "/".concat(lang.slug).concat(path);
      } // Construct route object


      var route = _objectSpread({
        path: path,
        component: component
      }, name ? {
        name: "".concat(name, "-").concat(lang.slug)
      } : {}, children ? {
        children: children
      } : {}); // Push route to array


      localizedRoutes.push(route);
    });
  });
  return localizedRoutes;
}