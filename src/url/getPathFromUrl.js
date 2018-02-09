import verifyLeadingSlash from './verifyLeadingSlash'

export default function getPathFromUrl (string) {
  const regex = /(http[s]?:\/\/)?([^/\s]+\/)(.*)/
  const str = string
  const subst = `$3`
  const result = str.replace(regex, subst)
  return verifyLeadingSlash(result)
}
