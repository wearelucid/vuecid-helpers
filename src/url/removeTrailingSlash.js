export default function removeTrailingSlash (string) {
  return string.endsWith('/') ? string.slice(0, -1) : string
}
