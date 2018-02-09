import _deburr from 'lodash.deburr'
import _lowerCase from 'lodash.lowercase'
import _kebabCase from 'lodash.kebabcase'

/**
 * Clean a string: deburr, lowercase and kebabcase it. This is good to generate ids.
 *
 * @example
 *
 * cleanString('Some sting äöü')
 * // -> 'some-sting-aou'
 */

export default function cleanString (string = '') {
  // Strip HTML tags
  string = string.replace(/<\/?[^>]+(>|$)/g, '')
  return _kebabCase(_lowerCase(_deburr(string)))
}
