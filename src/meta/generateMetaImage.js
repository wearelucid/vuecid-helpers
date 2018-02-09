export default function generateMetaImage (options, post) {
  // Get defaultImageUrl from options
  const defaultImageUrl = options.localized.default_og_image ? options.localized.default_og_image.sizes['social-share-large'] : ''
  // Override if OG enabled and image url
  const imageUrl = post.og_enabled && post.og_image && post.og_image.sizes['social-share-large'] ? post.og_image.sizes['social-share-large'] : defaultImageUrl
  return imageUrl
}
