export default function generateMetaDescription (options, post) {
  // Get defaultMetaDescription from options
  const defaultMetaDescription = options.localized.default_meta_description || ''
  // Override if SEO enabled and meta describtion not empty
  const metaDescription = post.seo_enabled && post.meta_description !== '' ? post.meta_description : defaultMetaDescription
  return metaDescription
}
