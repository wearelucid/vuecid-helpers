import _has from 'lodash.has'

/**
 * Generate localized routes using Nuxt's generated routes and i18n config
 * @param  {Object} options Options
 * @return {Array}          Localized routes to be used in Nuxt config
 */

export default function generateLocalizedRoutes(options = {
  baseRoutes: [],
  defaultLang: '',
  langs: [],
  routesAliases: {}
}) {
  const localizedRoutes = []
  

  // Loop through all generated routes
  options.baseRoutes.forEach(baseRoute => {
    const { children, path } = baseRoute 
    
    if (children) {
      console.log(`children:`, children)
      children.map(c => {
        // extend path by childs path
        if (c.path.length) {
          // console.log('c.path: ', c.path)
          // console.log('path: ', path)
          c.path = `${path}/${c.path}`
          // console.log('c.path: ', c.path)
        }
      })
      console.log(`children:`, children)
    }
    
    // Loop through all configured languages
    options.langs.forEach(lang => {
      // Get values from baseRoute
      const { component } = baseRoute
      let { path, name, children } = baseRoute

      // Recursively generate routes for all children if there are any
      if (children) {
        // forach choödrem child = vbaseroute + chlld
        children = generateLocalizedRoutes({
          baseRoutes: children, 
          langs: [lang], 
          defaultLang: options.defaultLang,
          routesAliases: options.routesAliases
         })
      }

      // Handle route aliases
      if (_has(options.routesAliases, `${name}.${lang.slug}`)) {
        path = options.routesAliases[name][lang.slug]
      }
      
      console.log('🐦- - - - - ------------ - - - -')
      console.log('lang.lang: ', lang.lang)
      console.log('options.defaultLang: ', options.defaultLang)
      console.log('- - - - - ------------ - - - -🚀')
      // Prefix path with lang slug if not default lang
      if (lang.lang !== options.defaultLang) {
        // Add leading / if needed (ie. children routes)
        if (path.match(/^\//) === null) {
          path = `/${path}`
        }
        path = `/${lang.slug}${path}`
      }

      // Construct route object
      const route = {
        path,
        component,
        ...(name ? { name: `${name}-${lang.slug}` } : {}),
        ...(children ? { children: children } : {})
      }

      // Push route to array
      localizedRoutes.push(route)
    })
  })

  return localizedRoutes
}
