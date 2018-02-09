export default function removeLeadingSlash (string) {
  return string.startsWith('/') ? string.substr(1) : string
}
