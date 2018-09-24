"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMetaDescription;

function generateMetaDescription(options, post) {
  // Get defaultMetaDescription from options
  var defaultMetaDescription = options.localized.default_meta_description || ''; // Override if SEO enabled and meta describtion not empty

  var metaDescription = post.seo_enabled && post.meta_description !== '' ? post.meta_description : defaultMetaDescription;
  return metaDescription;
}