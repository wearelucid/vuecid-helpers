// Misc utilities
import cleanString from './misc/cleanString'
import decodeHtmlEntity from './misc/decodeHtmlEntity'

// Data transformations
import applyToOneOrMany from './data-transformation/applyToOneOrMany'

// Routes utilities
import generateLocalizedRoutes from './routes/generateLocalizedRoutes'
import generateRoutesFromData from './routes/generateRoutesFromData'

// Url utilities
import checkAndGetHomeSlug from './url/checkAndGetHomeSlug'
import isHomeSlug from './url/isHomeSlug'
import isHome from './url/isHome'
import cleanSlug from './url/cleanSlug'
import getPathFromUrl from './url/getPathFromUrl'
import removeHomeSlug from './url/removeHomeSlug'
import removeLeadingLang from './url/removeLeadingLang'
import removeLeadingSlash from './url/removeLeadingSlash'
import removeTrailingSlash from './url/removeTrailingSlash'
import verifyLeadingSlash from './url/verifyLeadingSlash'
import verifyTrailingSlash from './url/verifyTrailingSlash'

// WP helpers
import isWordPressPreview from './wp/misc/isWordPressPreview'
import generateMetaInfo from './wp/meta/generateMetaInfo'


export {
  // Misc utilities
  cleanString,
  decodeHtmlEntity,
  // Data transformations
  applyToOneOrMany,
  // Routes utilities
  generateLocalizedRoutes,
  generateRoutesFromData,
  // Url utilities
  checkAndGetHomeSlug,
  isHomeSlug,
  isHome,
  cleanSlug,
  getPathFromUrl,
  removeHomeSlug,
  removeLeadingLang,
  removeLeadingSlash,
  removeTrailingSlash,
  verifyLeadingSlash,
  verifyTrailingSlash,
  isWordPressPreview,
  generateMetaInfo
}
