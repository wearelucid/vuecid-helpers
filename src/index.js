// Data utilities
import getPageOrPostLinkFromLang from './data/getPageOrPostLinkFromLang'
import applyToOneOrMany from './data/applyToOneOrMany'
import flattenACF from './data/flattenACF'
import normalizeWordpress from './data/normalizeWordpress'
import removeFieldsFromPost from './data/removeFieldsFromPost'
import decodeTitle from './data/decodeTitle'
import reduceBundle from './data/reduceBundle'

// Meta data utilities
import generateMetaInfo from './meta/generateMetaInfo'

// Url utilities
import checkIfSlugIsHome from './url/checkIfSlugIsHome'
import checkIfWordPressPreview from './url/checkIfWordPressPreview'
import checkIsHome from './url/checkIsHome'
import cleanSlug from './url/cleanSlug'
import getPathFromUrl from './url/getPathFromUrl'
import removeHomeSlugFromPermalink from './url/removeHomeSlugFromPermalink'
import removeLeadingLang from './url/removeLeadingLang'
import removeLeadingSlash from './url/removeLeadingSlash'
import removeTrailingSlash from './url/removeTrailingSlash'
import verifyLeadingSlash from './url/verifyLeadingSlash'

// Misc utilities
import cleanString from './misc/cleanString'

export {
  // Data utilities
  getPageOrPostLinkFromLang,
  applyToOneOrMany,
  flattenACF,
  normalizeWordpress,
  removeFieldsFromPost,
  decodeTitle,
  reduceBundle,

  // Meta data utilities
  generateMetaInfo,

  // Url utilities
  checkIfSlugIsHome,
  checkIfWordPressPreview,
  checkIsHome,
  cleanSlug,
  getPathFromUrl,
  removeHomeSlugFromPermalink,
  removeLeadingLang,
  removeLeadingSlash,
  removeTrailingSlash,
  verifyLeadingSlash,

  // Misc utilities
  cleanString
}
