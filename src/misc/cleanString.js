/**
 * Clean a string
 */

import _deburr from 'lodash.deburr'
import _lowerCase from 'lodash.lowercase'
import _kebabCase from 'lodash.kebabcase'

export default function cleanString (string = '') {
  // Strip HTML tags
  string = string.replace(/<\/?[^>]+(>|$)/g, '')
  return _kebabCase(_lowerCase(_deburr(string)))
}
