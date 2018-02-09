import removeTrailingSlash from './removeTrailingSlash'
import removeLeadingSlash from './removeLeadingSlash'
import removeLeadingLang from './removeLeadingLang'

export default function cleanSlug (string) {
  return removeLeadingLang(removeLeadingSlash(removeTrailingSlash(string)))
}
