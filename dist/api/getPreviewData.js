'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPreviewData;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _normalizeWordpress = require('../data-transformation/normalizeWordpress');

var _normalizeWordpress2 = _interopRequireDefault(_normalizeWordpress);

var _flattenACF = require('../data-transformation/flattenACF');

var _flattenACF2 = _interopRequireDefault(_flattenACF);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPreviewData(backendUrl, previewUrl) {
  return _axios2.default.get('' + (backendUrl + previewUrl), {
    withCredentials: true,
    transformResponse: [].concat(_axios2.default.defaults.transformResponse, _normalizeWordpress2.default, _flattenACF2.default)
  }).then(function (res) {
    res.data;
  });
}