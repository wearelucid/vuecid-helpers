/**
 * Remove trailing slash.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * removeTrailingSlash('/myslug/')
 * // -> '/myslug'
 */

export default function removeTrailingSlash(str) {
  if (!str) return
  return str.endsWith('/') ? str.slice(0, -1) : str
}
