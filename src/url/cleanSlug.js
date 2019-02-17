import removeTrailingSlash from './removeTrailingSlash'
import removeLeadingSlash from './removeLeadingSlash'
import removeLeadingLang from './removeLeadingLang'

/**
 * Get the naked slug without any slashes or locales.
 */

export default function cleanSlug(string) {
  return removeLeadingLang(removeLeadingSlash(removeTrailingSlash(string)))
}
