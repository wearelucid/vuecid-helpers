import applyToOneOrMany from './applyToOneOrMany'

/**
 * Create reduced WordPress post object(s). This is good to generate routes or sitemaps.
 */

export default function removeErrorPrefixFromPolylangObjects (data) {
  return applyToOneOrMany(_removeErrorPrefixFromPolylangObjects, data)
}

function _removeErrorPrefixFromPolylangObjects (data) {
  let reduced = data
  if (reduced.slug.includes('error-')) {
    if (reduced.polylang && reduced.polylang.translations && reduced.polylang.translations.length) {
      reduced.polylang.translations.map(p => {
        p.slug = p.slug.replace('error-', '')
        p.uri = p.uri.replace('error-', '')
        p.permalink = p.permalink.replace('error-', '')
      })
    }
  }
  return reduced
}
