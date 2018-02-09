import applyToOneOrMany from './applyToOneOrMany'

/**
* Delete fields we don't need (anymore)
*/
export default function removeFieldsFromPost (data) {
  return applyToOneOrMany(_removeFieldsFromPost, data)
}

function _removeFieldsFromPost (data) {
  delete data._links
  return data
}
