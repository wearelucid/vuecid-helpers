/**
 * Verify leading slash.
 *
 * @example
 *
 * verifyLeadingSlash('myslug')
 * // -> '/myslug'
 */

export default function verifyLeadingSlash (string) {
  return string.startsWith('/') ? string : `/${string}`
}
