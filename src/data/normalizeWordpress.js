import applyToOneOrMany from './applyToOneOrMany'

export default function normalizeWordpress (data) {
  return applyToOneOrMany(_normalizeWordpressPost, data)
}

function _normalizeWordpressPost (post) {
  post.title = post.title.rendered
  post.content = post.content.rendered
  post.excerpt = post.excerpt ? post.excerpt.rendered : null
  return post
}
