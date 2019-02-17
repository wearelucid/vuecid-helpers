import removeHomeSlug from '../../url/removeHomeSlug'
import verifyTrailingSlash from '../../url/verifyTrailingSlash'

export default function generateHreflangs(post) {
  const hreflangs = []

  // Only generate alternates if there is more than one language
  if (
    post.polylang &&
    post.polylang.translations &&
    post.polylang.translations.length > 1
  ) {
    post.polylang.translations.map(t => {
      const hreflang = {
        rel: 'alternate',
        hreflang: t.lang,
        href: verifyTrailingSlash(removeHomeSlug(t.permalink))
      }
      hreflangs.push(hreflang)
    })
  }
  return hreflangs
}
