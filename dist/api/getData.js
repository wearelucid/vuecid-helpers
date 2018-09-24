"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getData;

var _axios = _interopRequireDefault(require("axios"));

var _normalizeWordpress = _interopRequireDefault(require("../data-transformation/normalizeWordpress"));

var _flattenACF = _interopRequireDefault(require("../data-transformation/flattenACF"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getData(type, lang) {
  return _axios.default.get("/data/".concat(type, ".").concat(lang, ".json"), {
    transformResponse: [].concat(_axios.default.defaults.transformResponse, _normalizeWordpress.default, _flattenACF.default)
  }).then(function (res) {
    return res.data;
  });
}