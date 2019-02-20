/**
 * Returns true if we are on home, e.g. '/en/' or '/en' or '/'
 *
 * @param  {string} path
 * @param  {string} locale
 * @return {Boolean}
 *
 */

export default function isHome(path, locale) {
  return path === `/${locale}/` || path === `/${locale}` || path === '/'
}
