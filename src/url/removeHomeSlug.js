import removeTrailingSlash from './removeTrailingSlash'

/**
 * Remove 'home' from url.
 *
 * @example
 *
 * removeHomeSlug('https://www.mysite.com/home/') -> 'https://www.mysite.com/'
 *
 */

export default function removeHomeSlug (string, homeSlug = 'home') {
  if (typeof string === 'string' || string instanceof String) {
    let s = string !== '/' ? removeTrailingSlash(string) : '/'
    if (s.endsWith(homeSlug)) {
      s = s.replace(homeSlug, '')
    }
    return s
  } else {
    console.warn('removeHomeSlug(): Please give me a string!')
    return string
  }
}
