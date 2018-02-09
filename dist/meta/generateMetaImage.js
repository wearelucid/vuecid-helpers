'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMetaImage;
function generateMetaImage(options, post) {
  // Get defaultImageUrl from options
  var defaultImageUrl = options.localized.default_og_image ? options.localized.default_og_image.sizes['social-share-large'] : '';
  // Override if OG enabled and image url
  var imageUrl = post.og_enabled && post.og_image && post.og_image.sizes['social-share-large'] ? post.og_image.sizes['social-share-large'] : defaultImageUrl;
  return imageUrl;
}