import getPathFromUrl from '../url/getPathFromUrl'

// Load JSON file
function loadLocalizedJson(path, lang) {
  return require(`${path}.${lang}.json`)
}

export default function generateRoutesFromData(options = {
  langs: [],
  postTypes: {},
  dataPath: '',
  bundle: ''
}) {
  const _postTypes = options.postTypes.map(pt => pt.type)

  // Save data JSON files
  const localizedJson = options.langs.map(l => loadLocalizedJson(`${options.dataPath}/${options.bundle}`, l.slug))

  // Get path from url for each post type from locaized JSON and make an array :-)
  const langRoutes = _postTypes.reduce((acc, type) => {
    return [
      ...acc,
      ...localizedJson.map(l => {
        return l[type].map(p => getPathFromUrl(p.link))
      })
    ]
  }, []) // acc

  // Use root '/' for default lang
  const langRoutesRoot = options.langs.map(l => (l.default ? '/' : l.slug))

  return [
    ...langRoutesRoot,
    ...langRoutes.reduce((acc, cur) => [...acc, ...cur]) // flatten array
  ]
}
