/**
 * Verify leading slash.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * verifyLeadingSlash('myslug')
 * // -> '/myslug'
 */

export default function verifyLeadingSlash(str) {
  return str.startsWith('/') ? str : `/${str}`
}
