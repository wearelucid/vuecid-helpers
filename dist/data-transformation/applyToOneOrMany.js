"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyToOneOrMany;

/**
 * Apply a function to a single object or to every item in an array.
 */
function applyToOneOrMany(fn, data) {
  if (Array.isArray(data)) {
    data = data.map(fn);
  } else {
    data = fn(data);
  }

  return data;
}