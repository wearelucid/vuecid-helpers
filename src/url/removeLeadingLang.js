/**
 * Remove leading language locale.
 *
 * TODO: Make this more generic. Use regex to remove leading lang locale.
 *
 * @example
 *
 * removeLeadingLang('en/myslug/')
 * // -> 'myslug/'
 */

export default function removeLeadingLang (string) {
  return string.startsWith('en/') || string.startsWith('fr/') || string.startsWith('it/') ? string.substr(3) : string
}
