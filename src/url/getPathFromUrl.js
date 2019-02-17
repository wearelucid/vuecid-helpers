import verifyLeadingSlash from './verifyLeadingSlash'

/**
 * Regex to get the path from url. Makes sure that there is a leading slash.
 * https://regex101.com/r/uMOB5V/2/
 *
 * ⚠️ Subdomains don't work with this: https://regex101.com/r/uMOB5V/3/
 * getPathFromUrl('https://www.mysubdomain.mysite.com/en/myslug/') will not match the regex pattern...
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * getPathFromUrl('https://www.mysite.com/en/myslug/')
 * // -> '/en/myslug/'
 */

export default function getPathFromUrl(str) {
  const regex = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/
  const _str = str
  const subst = `$3`
  const result = _str.replace(regex, subst)
  return verifyLeadingSlash(result)
}
