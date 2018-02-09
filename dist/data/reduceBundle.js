'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceBundle;

var _applyToOneOrMany = require('./applyToOneOrMany');

var _applyToOneOrMany2 = _interopRequireDefault(_applyToOneOrMany);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Delete fields we don't need (anymore)
*/
function reduceBundle(data) {
  return (0, _applyToOneOrMany2.default)(_reduceBundle, data);
}

function _reduceBundle(data) {
  var reduced = {
    title: data.title,
    polylang: {
      'current_lang': data.polylang['current_lang'],
      'translations': data.polylang['translations']
    },
    lang: data.lang,
    slug: data.slug,
    link: data.link
  };
  return reduced;
}