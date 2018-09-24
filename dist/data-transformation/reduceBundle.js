"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceBundle;

var _applyToOneOrMany = _interopRequireDefault(require("./applyToOneOrMany"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create reduced WordPress post object(s). This is good to generate routes or sitemaps.
 */
function reduceBundle(data) {
  return (0, _applyToOneOrMany.default)(_reduceBundle, data);
}

function _reduceBundle(data) {
  var reduced = {
    title: data.title,
    polylang: {
      'current_lang': data.polylang && data.polylang['current_lang'] ? data.polylang['current_lang'] : '',
      'translations': data.polylang && data.polylang['translations'] ? data.polylang['translations'] : ''
    },
    lang: data.lang,
    slug: data.slug,
    link: data.link
  };
  return reduced;
}