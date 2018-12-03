import verifyLeadingSlash from './verifyLeadingSlash'

/**
 * Regex to get the path from url. Makes sure that there is a leading slash.
 * https://regex101.com/r/uMOB5V/2/
 *
 * @example
 *
 * getPathFromUrl('https://www.mysite.com/en/myslug/')
 * // -> '/en/myslug/'
 */

export default function getPathFromUrl (string) {
  const regex = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/
  const str = string
  const subst = `$3`
  const result = str.replace(regex, subst)
  return verifyLeadingSlash(result)
}
