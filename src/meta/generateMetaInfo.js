import generateMetaDescription from './generateMetaDescription'
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
  const canonicalUrl = `${verifyTrailingSlash(_siteSettings.website_url)}${removeLeadingSlash(removeTrailingSlash(path))}`

  // meta_facebook_admins_id
  // meta_publisher_twitter_handle
  // meta_site_title
  // meta_website_url

  console.log('siteSettings: ', siteSettings)
  console.log('_siteSettings: ', _siteSettings)
  // console.log('_siteSettings: ', _siteSettings)
  // console.log('post: ', post)
  // console.log('path: ', path)
  // console.log('locale: ', locale)
  console.log('post: ', post)


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
      { hid: 'twitter:description', name: 'twitter:description', content: description }
    ],
  //   link: [
  //     { rel: 'canonical', href: canonicalUrl }
  //     // { rel:'alternate', hreflang='en', href='#'}
  //   ].concat(hreflangs) // merge with hreflangs
  // }
  //
  // if (twitterHandle) {
  //   metaInfo.meta.push(
  //     { name: 'twitter:site', content: twitterHandle }
  //   )
  // }
  //
  // if (image) {
  //   metaInfo.meta.push(
  //     { hid: 'og:image', property: 'og:image', content: image },
  //     { hid: 'twitter-image', name: 'twitter:image', content: image },
  //     // Make sure your backend crops the og image with this dimensions
  //     { hid: 'og:image:width', name: 'og:image:width', content: '1280' },
  //     { hid: 'og:image:height', name: 'og:image:height', content: '720' },
  //     { hid: 'twitter-card', name: 'twitter:card', content: 'summary_large_image' }
  //   )
  }




  // const websiteUrl = siteSettings.global.website_url || 'website.url'
  // const siteName = siteSettings.global.site_title || ''
  // console.log('siteName: ', siteName)
  //
  // /* TODO: Use global site settings for everything if there are no localized settings */
  // const ogSiteName = siteSettings.localized.og_site_name ? siteSettings.localized.og_site_name : siteName
  //
  // const title = generateMetaTitle(siteSettings, post)
  // const description = generateMetaDescription(siteSettings, post)
  // const ogTitle = post && post.og_enabled && post.og_title ? post.og_title : title
  // const ogDescription = post && post.og_enabled && post.og_description ? post.og_description : description
  // const twitterHandle = siteSettings.site_twitter_handle || false
  // const image = generateMetaImage(siteSettings, post)
  // const hreflangs = generateHreflangs(post, websiteUrl)
  // const canonicalUrl = websiteUrl + removeLeadingSlash(removeTrailingSlash(path))

  // const metaInfo = {
  //   title: titlePattern ? `${title} ${titlePatternSeparator} ${siteName}` : siteName,
  //   htmlAttrs: {
  //     lang: locale
  //   },
  //   meta: [
  //     { name: 'application-name', content: siteName },
  //     { hid: 'description', name: 'description', content: description },
  //     { hid: 'og:locale', rel: 'og:locale', content: locale },
  //     { hid: 'og:title', property: 'og:title', content: ogTitle },
  //     { hid: 'og:description', property: 'og:description', content: ogDescription },
  //     { hid: 'og:url', property: 'og:url', content: canonicalUrl },
  //     { hid: 'og:type', property: 'og:type', content: 'website' },
  //     { hid: 'og:site_name', property: 'og:site_name', content: ogSiteName },
  //     { hid: 'og:locale', property: 'og:locale', content: locale },
  //     { hid: 'twitter:title', name: 'twitter:title', content: ogTitle },
  //     { hid: 'twitter:description', name: 'twitter:description', content: ogDescription }
  //   ],
  //   link: [
  //     { rel: 'canonical', href: canonicalUrl }
  //     // { rel:'alternate', hreflang='en', href='#'}
  //   ].concat(hreflangs) // merge with hreflangs
  // }
  //
  // if (twitterHandle) {
  //   metaInfo.meta.push(
  //     { name: 'twitter:site', content: twitterHandle }
  //   )
  // }
  //
  // if (image) {
  //   metaInfo.meta.push(
  //     { hid: 'og:image', property: 'og:image', content: image },
  //     { hid: 'twitter-image', name: 'twitter:image', content: image },
  //     // Make sure your backend crops the og image with this dimensions
  //     { hid: 'og:image:width', name: 'og:image:width', content: '1280' },
  //     { hid: 'og:image:height', name: 'og:image:height', content: '720' },
  //     { hid: 'twitter-card', name: 'twitter:card', content: 'summary_large_image' }
  //   )
  // }
  //
  // console.log('hoi meta')
  //
  // return metaInfo

  console.table(metaInfo)
  console.table(metaInfo.meta)

  return metaInfo

}
