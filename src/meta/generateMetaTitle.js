export default function generateMetaTitle (options, post) {
  // Set page title from post
  const pageTitle = post && post.title ? post.title : ''
  // Override if SEO enabled and seo title not empty
  const seoTitle = post.seo_enabled && post.seo_title !== '' ? post.seo_title : pageTitle
  return seoTitle
}
