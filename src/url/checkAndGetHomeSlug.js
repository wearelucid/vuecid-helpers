/**
 * Returns homeSlug if we are on home, e.g. '/en/' or '/en' or '/'
 */

import checkIsHome from './checkIsHome'

export default function checkAndGetHomeSlug (path, locale, homeSlug='home') {
  if (checkIsHome(path, locale)) {
    return homeSlug
  } else {
    return path
  }
}
