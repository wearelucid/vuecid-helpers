"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMetaImage;

function generateMetaImage() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$siteSettings = _ref.siteSettings,
      siteSettings = _ref$siteSettings === void 0 ? {} : _ref$siteSettings,
      _ref$post = _ref.post,
      post = _ref$post === void 0 ? {} : _ref$post;

  // Throw if there is no default og image in the correct size
  if (!siteSettings || !siteSettings.meta_og_image_default || !siteSettings.meta_og_image_default.sizes['social-share-large']) {
    throw new Error('_siteSettings.meta_og_image_default.sizes[\'social-share-large\'] is required');
  } // Get defaultImageUrl from site settings


  var defaultImageUrl = siteSettings.meta_og_image_default.sizes['social-share-large']; // Override if set in post

  var imageUrl = post.meta_og_image && post.meta_og_image.sizes['social-share-large'] ? post.meta_og_image.sizes['social-share-large'] : defaultImageUrl;
  return [{
    hid: 'og:image',
    property: 'og:image',
    content: imageUrl
  }, {
    hid: 'og:image:width',
    name: 'og:image:width',
    content: '1280'
  }, {
    hid: 'og:image:height',
    name: 'og:image:height',
    content: '720'
  }, {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: imageUrl
  }, {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image'
  }];
}