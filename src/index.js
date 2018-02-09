// Data transformations
import applyToOneOrMany from './data-transformation/applyToOneOrMany'
import flattenACF from './data-transformation/flattenACF'
import normalizeWordpress from './data-transformation/normalizeWordpress'
import removeFieldsFromPost from './data-transformation/removeFieldsFromPost'
import decodeTitle from './data-transformation/decodeTitle'
import reduceBundle from './data-transformation/reduceBundle'

// Meta data utilities
import generateMetaInfo from './meta/generateMetaInfo'

// Misc utilities
import cleanString from './misc/cleanString'
import decodeHtmlEntity from './misc/decodeHtmlEntity'

// Url utilities
import checkIfSlugIsHome from './url/checkIfSlugIsHome'
import checkIfWordPressPreview from './url/checkIfWordPressPreview'
import checkIsHome from './url/checkIsHome'
import cleanSlug from './url/cleanSlug'
import getPageOrPostLinkFromLang from './url/getPageOrPostLinkFromLang'
import getPathFromUrl from './url/getPathFromUrl'
import removeHomeSlugFromPermalink from './url/removeHomeSlugFromPermalink'
import removeLeadingLang from './url/removeLeadingLang'
import removeLeadingSlash from './url/removeLeadingSlash'
import removeTrailingSlash from './url/removeTrailingSlash'
import verifyLeadingSlash from './url/verifyLeadingSlash'

export {
  // Data transformations
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
  getPageOrPostLinkFromLang,
  getPathFromUrl,
  removeHomeSlugFromPermalink,
  removeLeadingLang,
  removeLeadingSlash,
  removeTrailingSlash,
  verifyLeadingSlash,

  // Misc utilities
  cleanString,
  decodeHtmlEntity
}
