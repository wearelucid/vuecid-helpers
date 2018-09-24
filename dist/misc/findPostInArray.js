"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findPostInArray;
/**
 * Find a post object in an array of posts
 */

function findPostInArray(postsArray, postSlug) {
  return postsArray.find(function (p) {
    return p.slug === postSlug;
  });
}