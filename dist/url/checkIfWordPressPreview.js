"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkIfWordPressPreview;

/**
 * Check if we are in preview mode.
 */
function checkIfWordPressPreview(route) {
  // Check for query strings. If we have all three it's a pretty fair indicator we are in preview mode.
  return route.query.preview && route.query.preview_nonce && route.query.preview_id;
}