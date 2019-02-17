/**
 * Decode unicode characters (decode html text into html entity).
 *
 * Inspired by this gist: https://gist.github.com/CatTail/4174511
 *
 * @param  {string} str - An encoded string
 * @return {String} A decoded string
 */

export default function decodeHtmlEntity(str) {
  if (str && typeof str === 'string') {
    return str.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec)
    })
  } else {
    // eslint-disable-next-line no-console
    console.error('decodeHtmlEntity() – Please give me a string')
    return str
  }
}
