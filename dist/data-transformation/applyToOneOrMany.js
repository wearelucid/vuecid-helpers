"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyToOneOrMany;

/**
 * Apply a function to a single object or to every item in an array.
 *
 * @param  {Function} fn - Function to pass in to map
 * @param  {Array} data - Your data array
 * @return {Array} Your data array with the funtion applied
 */
function applyToOneOrMany(fn, data) {
  if (Array.isArray(data)) {
    data = data.map(fn);
  } else {
    data = fn(data);
  }

  return data;
}