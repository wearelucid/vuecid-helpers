/**
 * General helpers
 */

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
import checkIfSlugIsHome from './url/checkIfSlugIsHome'
import checkIsHome from './url/checkIsHome'
import cleanSlug from './url/cleanSlug'
import getPathFromUrl from './url/getPathFromUrl'
import removeHomeSlug from './url/removeHomeSlug'
import removeLeadingLang from './url/removeLeadingLang'
import removeLeadingSlash from './url/removeLeadingSlash'
import removeTrailingSlash from './url/removeTrailingSlash'
import verifyLeadingSlash from './url/verifyLeadingSlash'
import verifyTrailingSlash from './url/verifyTrailingSlash'

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
  checkIfSlugIsHome,
  checkIsHome,
  cleanSlug,
  getPathFromUrl,
  removeHomeSlug,
  removeLeadingLang,
  removeLeadingSlash,
  removeTrailingSlash,
  verifyLeadingSlash,
  verifyTrailingSlash
}
