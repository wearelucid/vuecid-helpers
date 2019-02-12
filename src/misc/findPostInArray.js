/**
 * Find a post object in an array of posts
 */

export default function findPostInArray(postsArray, postSlug) {
  return postsArray.find(p => p.slug === postSlug)
}
