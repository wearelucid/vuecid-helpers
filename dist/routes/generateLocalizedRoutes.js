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
    routesAliases: {},
    isChild: false
  };
  var localizedRoutes = []; // Loop through all generated routes

  options.baseRoutes.forEach(function (baseRoute) {
    // Loop through all configured languages
    options.langs.forEach(function (lang) {
      // Get values from baseRoute
      var component = baseRoute.component;
      var path = baseRoute.path,
          children = baseRoute.children;
      var name = baseRoute.name;

      var meta = _objectSpread({}, baseRoute.meta, {
        isInBundle: true,
        postType: null // Throw error if no locales provided

      });

      if (options.routesAliases[name] && !options.routesAliases[name].locales) {
        throw new Error('Route aliases have to be nested in a locales object');
      } // Recursively generate routes for all children if there are any


      if (children) {
        children = generateLocalizedRoutes({
          baseRoutes: children,
          langs: [lang],
          defaultLang: options.defaultLang,
          routesAliases: options.routesAliases,
          isChild: true
        });
      } // Handle route path aliases


      if (options.routesAliases[name] && (0, _lodash.default)(options.routesAliases, "".concat(name, ".locales.").concat(lang.slug))) {
        path = options.routesAliases[name].locales[lang.slug];
      } // Check if in bundle


      if ((0, _lodash.default)(options.routesAliases, "".concat(name, ".isInBundle"))) {
        meta.isInBundle = options.routesAliases[name].isInBundle;
      } // Check for post type


      if ((0, _lodash.default)(options.routesAliases, "".concat(name, ".postType"))) {
        meta.postType = options.routesAliases[name].postType;
      } // Prefix path with lang slug if not default lang
      // But don't do it for children


      if (lang.lang !== options.defaultLang && !options.isChild) {
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
      } : {}, {
        meta: _objectSpread({}, meta) // Push route to array

      });

      localizedRoutes.push(route);
    });
  });
  return localizedRoutes;
}