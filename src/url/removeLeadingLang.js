export default function removeLeadingLang (string) {
  return string.startsWith('en/') || string.startsWith('fr/') ? string.substr(3) : string
}
