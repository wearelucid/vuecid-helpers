export default function checkIsHome (path, locale) {
  // Returns true if we are on home, e.g. '/de/' or '/de' or '/'
  return path === `/${locale}/` || path === `/${locale}` || path === '/'
}
