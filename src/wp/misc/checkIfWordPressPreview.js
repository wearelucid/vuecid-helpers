/**
 * Check if we are in preview mode.
 */

export default function checkIfWordPressPreview(route) {
  // Check for query strings. If we have all three it's a pretty fair indicator we are in preview mode.
  return (
    route.query.preview && route.query.preview_nonce && route.query.preview_id
  )
}
