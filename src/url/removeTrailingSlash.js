/**
 * Remove trailing slash.
 *
 * @example
 *
 * removeTrailingSlash('/myslug/')
 * // -> '/myslug'
 */

export default function removeTrailingSlash (string) {
  return string.endsWith('/') ? string.slice(0, -1) : string
}
