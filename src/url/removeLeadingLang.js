/**
 * Remove leading language locale.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * removeLeadingLang('en/myslug/')
 * // -> 'myslug/'
 */

export default function removeLeadingLang(str) {
  return str.startsWith('en/') ||
    str.startsWith('fr/') ||
    str.startsWith('it/') ||
    str.startsWith('de/')
    ? str.substr(3)
    : str
}
