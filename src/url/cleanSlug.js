import removeTrailingSlash from './removeTrailingSlash'
import removeLeadingSlash from './removeLeadingSlash'
import removeLeadingLang from './removeLeadingLang'

/**
 * Get the naked slug without any slashes or locales.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * cleanSlug('en/myslug/')
 * // -> 'myslug'
 */

export default function cleanSlug(str) {
  return removeLeadingLang(removeLeadingSlash(removeTrailingSlash(str)))
}
