import generateMetaImage from './generateMetaImage'
import generateHreflangs from './generateHreflangs'
import removeTrailingSlash from '../url/removeTrailingSlash'
import removeLeadingSlash from '../url/removeLeadingSlash'
import verifyTrailingSlash from '../url/verifyTrailingSlash'

/**
 * Generate meta info.
 *
 * hid in meta tags is needed to prevent duplicate properties
 * https://nuxtjs.org/faq/duplicated-meta-tags/
 * also they have to override nuxt.configs manifest infos, which sets an hid
 * therefore the og:description hid has to be called 'hid: "og:description"' and so on
 */

export default function generateMetaInfo ({
  siteSettings = {},
  post = {},
  path = '',
  locale = '',
  debug = false,
  titlePattern = true,
  titlePatternSeparator = '|'
} = {}) {

  // Check if we have all required data
  if(!siteSettings || !siteSettings.global || !siteSettings.global.meta_global_site_settings) throw new Error('siteSettings and siteSettings.global.meta_global_site_settings are required')
  if(!post) throw new Error('post is required')
  if(!path) throw new Error('path is required')
  if(!locale) throw new Error('locale is required')

  const _siteSettings = {
    meta_site_name: '',
    meta_description_default: '',
    website_url: '',
    ...siteSettings.global.meta_global_site_settings,
    ...siteSettings.localized
  }

  // Site Name: Use site settings
  const siteName = _siteSettings.meta_site_name

  // Title: Use post meta title or fallback to post title
  const title = post.meta_title ? post.meta_title : post.title || ''

  // Description: Use post meta description or fallback to site settings
  const description = post.meta_description ? post.meta_description : _siteSettings.meta_description_default

  //  Canonical: Construct canonical and ensure we don't mess up the slashes
  const canonicalUrl = `${verifyTrailingSlash(_siteSettings.meta_website_url)}${removeLeadingSlash(removeTrailingSlash(path))}`

  const metaInfo = {
    title: titlePattern ? `${title} ${titlePatternSeparator} ${siteName}` : siteName,
    htmlAttrs: {
      lang: locale
    },
    meta: [
      { name: 'application-name', content: siteName },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: canonicalUrl },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:locale', property: 'og:locale', content: locale },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'twitter:site', name: 'twitter:site', content: _siteSettings.meta_publisher_twitter_handle },
      { hid: 'fb:admins', property: 'fb:admins', content: _siteSettings.meta_facebook_admins_id },
      // Generate meta image:
      ...generateMetaImage({ siteSettings: _siteSettings, post: post })
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl },
      // Generate hreflangs from post:
      ...generateHreflangs(post)
    ]
  }

  // Log output
  if (debug) {
    console.table(metaInfo)
    console.table(metaInfo.meta)
    console.table(metaInfo.link)
  }

  return metaInfo
}
