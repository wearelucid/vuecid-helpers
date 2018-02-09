export default function verifyLeadingSlash (string) {
  return string.startsWith('/') ? string : `/${string}`
}
