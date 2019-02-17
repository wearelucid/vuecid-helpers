/**
 * Returns true if we are on home, e.g. '/en/' or '/en' or '/'
 */

export default function checkIsHome(path, locale) {
  return path === `/${locale}/` || path === `/${locale}` || path === '/'
}
