import removeTrailingSlash from './removeTrailingSlash'

/**
 * Remove 'home' from url.
 *
 * @param  {string} str
 * @param  {string} [homeSlug]
 * @return {string}
 *
 * @example
 *
 * removeHomeSlug('https://www.mysite.com/home/')
 * // -> 'https://www.mysite.com/'
 */

export default function removeHomeSlug(str, homeSlug = 'home') {
  if (typeof str === 'string' || str instanceof String) {
    let _str = str !== '/' ? removeTrailingSlash(str) : '/'
    if (_str.endsWith(homeSlug)) {
      _str = _str.replace(homeSlug, '')
    }
    return _str
  } else {
    // eslint-disable-next-line no-console
    console.warn('removeHomeSlug(): Please give me a string!')
    return str
  }
}
