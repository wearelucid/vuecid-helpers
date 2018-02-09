import applyToOneOrMany from './applyToOneOrMany'

/**
* Delete fields we don't need (anymore)
*/
export default function reduceBundle (data) {
  return applyToOneOrMany(_reduceBundle, data)
}

function _reduceBundle (data) {
  const reduced = {
    title: data.title,
    polylang: {
      'current_lang': data.polylang['current_lang'],
      'translations': data.polylang['translations']
    },
    lang: data.lang,
    slug: data.slug,
    link: data.link
  }
  return reduced
}
