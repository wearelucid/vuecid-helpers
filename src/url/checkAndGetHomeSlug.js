import isHome from './isHome'

/**
 * Returns homeSlug if we are on home, e.g. '/en/' or '/en' or '/'
 *
 * @param  {string} path
 * @param  {string} locale
 * @param  {string} [homeSlug]
 * @return {string} homeSlug or path
 */

export default function checkAndGetHomeSlug(path, locale, homeSlug = 'home') {
  if (isHome(path, locale)) {
    return homeSlug
  } else {
    return path
  }
}
