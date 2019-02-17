/**
 * WordPress specific stuff
 */

// Misc utilities
import checkIfWordPressPreview from './misc/checkIfWordPressPreview'

// Data transformations
import flattenACF from './data-transformation/flattenACF'
import normalizeWordpress from './data-transformation/normalizeWordpress'
import removeFieldsFromPost from './data-transformation/removeFieldsFromPost'
import decodeTitle from './data-transformation/decodeTitle'
import reduceBundle from './data-transformation/reduceBundle'
import removeErrorPrefixFromPolylangObjects from './data-transformation/removeErrorPrefixFromPolylangObjects'

// Meta info utilities
import generateMetaInfo from './meta/generateMetaInfo'

export {
  // Misc utilities
  checkIfWordPressPreview,
  // Data transformations
  flattenACF,
  normalizeWordpress,
  removeFieldsFromPost,
  decodeTitle,
  reduceBundle,
  removeErrorPrefixFromPolylangObjects,
  // Meta info utilities
  generateMetaInfo
}
