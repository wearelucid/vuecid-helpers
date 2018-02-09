import removeTrailingSlash from './removeTrailingSlash'

/**
 * Remove 'home' from url.
 *
 * @example
 *
 * removeHomeSlugFromPermalink('https://www.mysite.com/home/')
 * // -> 'https://www.mysite.com/'
 */

export default function removeHomeSlugFromPermalink (string) {
  let newString = removeTrailingSlash(string)
  if (newString.endsWith('home')) {
    return string.slice(0, -4)
  } else {
    return string
  }
}
