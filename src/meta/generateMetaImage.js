export default function generateMetaImage ({ siteSettings = {}, post = {} } = {}) {

  // Throw if there is no default og image in the correct size
  if(!siteSettings || !siteSettings.meta_og_image_default || !siteSettings.meta_og_image_default.sizes['social-share-large']) {
    throw new Error('_siteSettings.meta_og_image_default.sizes[\'social-share-large\'] is required')
  }

  // Get defaultImageUrl from site settings
  const defaultImageUrl = siteSettings.meta_og_image_default.sizes['social-share-large']

  // Override if set in post
  const imageUrl = post.meta_og_image && post.meta_og_image.sizes['social-share-large'] ? post.meta_og_image.sizes['social-share-large'] : defaultImageUrl


  return [
    { hid: 'og:image', property: 'og:image', content: imageUrl },
    { hid: 'og:image:width', name: 'og:image:width', content: '1280' },
    { hid: 'og:image:height', name: 'og:image:height', content: '720' },
    { hid: 'twitter:image', name: 'twitter:image', content: imageUrl },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
  ]
}
