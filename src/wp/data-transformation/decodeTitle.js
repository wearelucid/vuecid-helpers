import decodeHtmlEntity from '../../misc/decodeHtmlEntity'
import applyToOneOrMany from '../../data-transformation/applyToOneOrMany'

/**
 * Data transformation to decode any unicode characters in the title property.
 */

export default function decodeTitle(data) {
  return applyToOneOrMany(_decodeTitle, data)
}

function _decodeTitle(data) {
  if (data.hasOwnProperty('title')) {
    data.title = decodeHtmlEntity(data.title)
  }
  return data
}
