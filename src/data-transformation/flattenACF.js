import applyToOneOrMany from './applyToOneOrMany'

/**
 * Flatten acf in WordPress post object(s).
 */

export default function flattenACF (data) {
  return applyToOneOrMany(_flattenPost, data)
}

function _flattenPost (post) {
  const flatPost = { ...post, ...post.acf }
  return flatPost
}
