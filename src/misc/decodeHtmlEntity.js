/**
 * Decode unicode characters.
 *
 * Inspired by this gist: https://gist.github.com/CatTail/4174511
 */

export default function decodeHtmlEntity (str) {
  console.log('str: ', str)
  if (str && typeof str === 'string') {
    return str.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec)
    })
  }
}
