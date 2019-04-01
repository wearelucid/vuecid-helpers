import applyToOneOrMany from '../../data-transformation/applyToOneOrMany'

/**
 * Normalize WordPress post object(s).
 */

export default function normalizeWordpress(data) {
  return applyToOneOrMany(_normalizeWordpressPost, data)
}

function _normalizeWordpressPost(post) {
  if (post === null || typeof post !== 'object') {
    return post
  } else {
    post.title = post.title && post.title.rendered ? post.title.rendered : ''
    post.content =
      post.content && post.content.rendered ? post.content.rendered : ''
    post.excerpt = post.excerpt ? post.excerpt.rendered : ''
    return post
  }
}
