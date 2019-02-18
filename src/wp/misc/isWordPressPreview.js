/**
 * Check if we are in preview mode by looking for query strings.
 * If we have all three it's a pretty fair indicator we are in preview mode.
 *
 * @param {Object} route - The route object
 * @param {Object} [route.query] - Route queries to check
 * @return {Boolean} Do I look like a preview?
 */

export default function isWordPressPreview(route) {
  return !!(
    route &&
    route.query &&
    route.query.preview &&
    route.query.preview_nonce &&
    route.query.preview_id
  )
}
