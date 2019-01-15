"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeErrorPrefixFromPolylangObjects;

var _applyToOneOrMany = _interopRequireDefault(require("./applyToOneOrMany"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create reduced WordPress post object(s). This is good to generate routes or sitemaps.
 */
function removeErrorPrefixFromPolylangObjects(data) {
  return (0, _applyToOneOrMany.default)(_removeErrorPrefixFromPolylangObjects, data);
}

function _removeErrorPrefixFromPolylangObjects(data) {
  var reduced = data;

  if (reduced.slug.includes('error-')) {
    if (reduced.polylang && reduced.polylang.translations && reduced.polylang.translations.length) {
      reduced.polylang.translations.map(function (p) {
        p.slug = p.slug.replace('error-', '');
        p.uri = p.uri.replace('error-', '');
        p.permalink = p.permalink.replace('error-', '');
      });
    }
  }

  return reduced;
}