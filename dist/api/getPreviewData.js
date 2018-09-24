"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPreviewData;

var _axios = _interopRequireDefault(require("axios"));

var _normalizeWordpress = _interopRequireDefault(require("../data-transformation/normalizeWordpress"));

var _flattenACF = _interopRequireDefault(require("../data-transformation/flattenACF"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPreviewData(backendUrl, previewUrl) {
  return _axios.default.get("".concat(backendUrl + previewUrl), {
    withCredentials: true,
    transformResponse: [].concat(_axios.default.defaults.transformResponse, _normalizeWordpress.default, _flattenACF.default)
  }).then(function (res) {
    return res.data;
  });
}