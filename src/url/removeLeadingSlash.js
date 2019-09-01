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
  if (!str) return
  return str.startsWith('/') ? str.substr(1) : str
}
