/**
 * Apply a function to a single object or to every item in an array.
 */

export default function applyToOneOrMany (fn, data) {
  if (Array.isArray(data)) {
    data = data.map(fn)
  } else {
    data = fn(data)
  }
  return data
}
