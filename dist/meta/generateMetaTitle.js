"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMetaTitle;

function generateMetaTitle(options, post) {
  // Set page title from post
  var pageTitle = post && post.title ? post.title : ''; // Override if SEO enabled and seo title not empty

  var seoTitle = post.seo_enabled && post.seo_title !== '' ? post.seo_title : pageTitle;
  return seoTitle;
}