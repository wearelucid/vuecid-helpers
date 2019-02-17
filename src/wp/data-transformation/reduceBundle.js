import applyToOneOrMany from '../../data-transformation/applyToOneOrMany'

/**
 * Create reduced WordPress post object(s). This is good to generate routes or sitemaps.
 */

export default function reduceBundle(data) {
  return applyToOneOrMany(_reduceBundle, data)
}

function _reduceBundle(data) {
  const reduced = {
    title: data.title,
    polylang: {
      current_lang:
        data.polylang && data.polylang.current_lang
          ? data.polylang.current_lang
          : '',
      translations:
        data.polylang && data.polylang.translations
          ? data.polylang.translations
          : ''
    },
    lang: data.lang,
    slug: data.slug,
    link: data.link
  }
  return reduced
}
