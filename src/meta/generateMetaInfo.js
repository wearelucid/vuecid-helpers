import generateMetaTitle from './generateMetaTitle'
import generateMetaDescription from './generateMetaDescription'
import generateMetaImage from './generateMetaImage'
import generateHreflangs from './generateHreflangs'
import removeTrailingSlash from '../url/removeTrailingSlash'

/**
 * Generate meta info.
 *
 * TODO: Add config argument? Might be good for things like the title pattern/separator `${title} — ${siteName}`
 * TODO: Add more comments.
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
  const canonicalUrl = websiteUrl + removeTrailingSlash(route)

  const metaInfo = {
    title: `${title} — ${siteName}`,
    htmlAttrs: {
      lang: locale
    },
    meta: [
      { name: 'application-name', content: siteName },
      { name: 'description', content: description },
      // { name: 'keywords', content: post.keywords },
      { rel: 'og:locale', content: locale },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDescription },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: ogSiteName },
      { property: 'og:locale', content: locale },
      { name: 'twitter:title', content: ogTitle },
      { name: 'twitter:description', content: ogDescription }
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
      { property: 'og:image', content: image },
      { name: 'twitter:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' }
    )
  }

  return metaInfo
}
