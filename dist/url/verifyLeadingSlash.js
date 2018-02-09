'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyLeadingSlash;
function verifyLeadingSlash(string) {
  return string.startsWith('/') ? string : '/' + string;
}