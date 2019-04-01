/**
 * Remove leading slash.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * removeLeadingSlash('/myslug/')
 * // -> 'myslug/'
 */

export default function removeLeadingSlash(str) {
  return str.startsWith('/') ? str.substr(1) : str
}
