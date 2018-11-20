import generateMetaTitle from './generateMetaTitle'
import generateMetaDescription from './generateMetaDescription'
import generateMetaImage from './generateMetaImage'
import generateHreflangs from './generateHreflangs'
import removeTrailingSlash from '../url/removeTrailingSlash'
import removeLeadingSlash from '../url/removeLeadingSlash'

/**
 * Generate meta info.
 *
 * TODO: Add config argument? Might be good for things like the title pattern/separator `${title} — ${siteName}`
 * TODO: Add more comments.
 *
 * hid in meta tags is needed to prevent duplicate properties
 * https://nuxtjs.org/faq/duplicated-meta-tags/
 * also they have to override nuxt.configs manifest infos, which sets an hid
 * therefore the og:description hid has to be called 'hid: "og:description"' and so on
 */

export default function generateMetaInfo (options, post, locale, route) {
  const websiteUrl = options.global.website_url || 'website.url'
  const siteName = options.global.site_title || ''
  const ogSiteName = options.localized.og_site_name ? options.localized.og_site_name : siteName
  const title = generateMetaTitle(options, post)
  const description = generateMetaDescription(options, post)
  const ogTitle = post && post.og_enabled && post.og_title ? post.og_title : title
  const ogDescription = post && post.og_enabled && post.og_description ? post.og_description : description
  const twitterHandle = options.site_twitter_handle || false
  const image = generateMetaImage(options, post)
  const hreflangs = generateHreflangs(post, websiteUrl)
  const canonicalUrl = websiteUrl + removeLeadingSlash(removeTrailingSlash(route))

  const metaInfo = {
    title: `${title} — ${siteName}`,
    htmlAttrs: {
      lang: locale
    },
    meta: [
      { name: 'application-name', content: siteName },
      { hid: 'description', name: 'description', content: description },
      // { hid: 'keywords' name: 'keywords', content: post.keywords },
      { hid: 'og:locale', rel: 'og:locale', content: locale },
      { hid: 'og:title', property: 'og:title', content: ogTitle },
      { hid: 'og:description', property: 'og:description', content: ogDescription },
      { hid: 'og:url', property: 'og:url', content: canonicalUrl },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: ogSiteName },
      { hid: 'og:locale', property: 'og:locale', content: locale },
      { hid: 'twitter:title', name: 'twitter:title', content: ogTitle },
      { hid: 'twitter:description', name: 'twitter:description', content: ogDescription }
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
      // { rel:'alternate', hreflang='en', href='#'}
    ].concat(hreflangs) // merge with hreflangs
  }

  if (twitterHandle) {
    metaInfo.meta.push(
      { name: 'twitter:site', content: twitterHandle }
    )
  }

  if (image) {
    metaInfo.meta.push(
      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'twitter-image', name: 'twitter:image', content: image },
      // make sure your backend crops the og image with this dimensions
      { hid: 'og:image:width', name: 'og:image:width', content: '1280' },
      { hid: 'og:image:height', name: 'og:image:height', content: '720' },
      { hid: 'twitter-card', name: 'twitter:card', content: 'summary_large_image' }
    )
  }

  return metaInfo
}
