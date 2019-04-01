/**
 * Generates meta image info
 *
 * Like the meta description the OG Image is generated from the page-wide options, but will use a more specific OG image on a page/post – if set.
 * It uses the predefined size (`social-share-large`), which we defined in our WordPress image crops. 1280px x 720px.
 * By defining those sizes, an image does not have to be inspected by a platform like facebook, because it does not know the size yet. This saves time.
 *
 * @param {Object} siteSettings
 * @param {Object} post
 * @return {Array}
 */

export default function generateMetaImageInfo({
  siteSettings = {},
  post = {}
} = {}) {
  // Throw if there is no default og image in the correct size
  if (
    !siteSettings ||
    !siteSettings.meta_og_image_default ||
    !siteSettings.meta_og_image_default.sizes['social-share-large']
  ) {
    throw new Error(
      "_siteSettings.meta_og_image_default.sizes['social-share-large'] is required"
    )
  }

  // Get defaultImageUrl from site settings
  const defaultImageUrl =
    siteSettings.meta_og_image_default.sizes['social-share-large']

  // Override if set in post
  const imageUrl =
    post.meta_og_image && post.meta_og_image.sizes['social-share-large']
      ? post.meta_og_image.sizes['social-share-large']
      : defaultImageUrl

  return [
    { hid: 'og:image', property: 'og:image', content: imageUrl },
    { hid: 'og:image:width', name: 'og:image:width', content: '1280' },
    { hid: 'og:image:height', name: 'og:image:height', content: '720' },
    { hid: 'twitter:image', name: 'twitter:image', content: imageUrl },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
  ]
}
