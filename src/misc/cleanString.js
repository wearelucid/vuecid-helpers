import _deburr from 'lodash.deburr'
import _lowerCase from 'lodash.lowercase'
import _kebabCase from 'lodash.kebabcase'

/**
 * Clean a string: deburr, lowercase and kebabcase it. This is good to generate ids.
 *
 * @param  {string} str A dirty string
 * @return {string} A clean string
 *
 * @example
 *
 * cleanString('Some sting äöü')
 * // -> 'some-sting-aou'
 */

export default function cleanString(str) {
  if (str && typeof str === 'string') {
    // Strip HTML tags
    str.replace(/<\/?[^>]+(>|$)/g, '')
    return _kebabCase(_lowerCase(_deburr(str)))
  } else {
    // eslint-disable-next-line no-console
    console.error('cleanString() – Please give me a string')
    return str
  }
}
