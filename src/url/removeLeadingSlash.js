/**
 * Remove leading slash.
 *
 * @example
 *
 * removeLeadingSlash('/myslug/')
 * // -> 'myslug/'
 */

export default function removeLeadingSlash (string) {
  return string.startsWith('/') ? string.substr(1) : string
}
