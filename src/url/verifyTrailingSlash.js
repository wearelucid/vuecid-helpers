/**
 * Verify leading slash.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * verifyTrailingSlash('myslug')
 * // -> 'myslug/'
 */

export default function verifyTrailingSlash(str) {
  return str.endsWith('/') ? str : `${str}/`
}
