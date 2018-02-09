import applyToOneOrMany from './applyToOneOrMany'

/**
* Delete fields we don't need (anymore)
*/
export default function decodeTitle (data) {
  return applyToOneOrMany(_decodeTitle, data)
}

function _decodeTitle (data) {
  data.title = decodeHtmlEntity(data.title)
  return data
}

function decodeHtmlEntity (str) {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec)
  })
}
