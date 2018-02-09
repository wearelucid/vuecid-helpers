import getPathFromUrl from '../url/getPathFromUrl'
import verifyLeadingSlash from '../url/verifyLeadingSlash'
import removeHomeSlugFromPermalink from '../url/removeHomeSlugFromPermalink'

function navigationToHome (lang, defaultLang) {
  return lang === defaultLang ? '/' : `/${lang}`
}

export default function getPageOrPostLinkFromLang (post, lang, defaultLang) {
  if (post && post.polylang && post.polylang.translations) {
    const translation = post.polylang.translations.find(t => t.lang === lang)
    if (translation) {
      const link = `${verifyLeadingSlash(getPathFromUrl(removeHomeSlugFromPermalink(translation.permalink)))}`
      return link
    } else {
      return navigationToHome(lang, defaultLang)
    }
  } else {
    return navigationToHome(lang, defaultLang)
  }
}
