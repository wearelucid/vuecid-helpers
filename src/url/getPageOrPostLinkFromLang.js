import getPathFromUrl from './getPathFromUrl'
import verifyLeadingSlash from './verifyLeadingSlash'
import removeHomeSlug from './removeHomeSlug'

/**
 * Get the path of the translation from a page or post object.
 */

function navigationTo404 (lang, defaultLang) {
  return lang === defaultLang ? '/404' : `/${lang}/404`
}

export default function getPageOrPostLinkFromLang (post, lang, defaultLang) {
  if (post && post.polylang && post.polylang.translations) {
    const translation = post.polylang.translations.find(t => t.lang === lang)
    if (translation) {
      const link = `${verifyLeadingSlash(getPathFromUrl(removeHomeSlug(translation.permalink)))}`
      return link
    } else {
      return navigationTo404(lang, defaultLang)
    }
  } else {
    return navigationTo404(lang, defaultLang)
  }
}
