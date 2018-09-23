'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = generateLocalizedRoutes;

var _lodash = require('lodash.has');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var localizedRoutes = [];

  // Loop through all generated routes
  options.baseRoutes.forEach(function (baseRoute) {
    // Loop through all configured languages
    options.langs.forEach(function (lang) {
      // Get values from baseRoute
      var component = baseRoute.component;
      var path = baseRoute.path,
          name = baseRoute.name,
          children = baseRoute.children;

      // Recursively generate routes for all children if there are any

      if (children) {
        children = generateLocalizedRoutes(children, [lang]);
      }

      // Handle route aliases
      if ((0, _lodash2.default)(options.routesAliases, name + '.' + lang.slug)) {
        path = options.routesAliases[name][lang.slug];
      }

      // Prefix path with lang slug if not default lang
      if (lang.lang !== options.defaultLang) {
        // Add leading / if needed (ie. children routes)
        if (path.match(/^\//) === null) {
          path = '/' + path;
        }
        path = '/' + lang.slug + path;
      }

      // Construct route object
      var route = _extends({
        path: path,
        component: component
      }, name ? { name: name + '-' + lang.slug } : {}, children ? { children: children } : {});

      // Push route to array
      localizedRoutes.push(route);
    });
  });

  return localizedRoutes;
}