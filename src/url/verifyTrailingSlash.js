/**
 * Verify leading slash.
 *
 * @example
 *
 * verifyTrailingSlash('myslug')
 * // -> 'myslug/'
 */

export default function verifyTrailingSlash (string) {
  return string.endsWith('/') ? string : `${string}/`
}
