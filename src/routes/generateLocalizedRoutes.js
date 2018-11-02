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
  routesAliases: {},
  isChild: false
}) {
  const localizedRoutes = []
  
  // Loop through all generated routes
  options.baseRoutes.forEach(baseRoute => {
    const { children, path } = baseRoute 
    
    // Loop through all configured languages
    options.langs.forEach(lang => {
      // Get values from baseRoute
      const { component } = baseRoute
      let { path, name, children } = baseRoute

      // Recursively generate routes for all children if there are any
      if (children) {
        children = generateLocalizedRoutes({
          baseRoutes: children, 
          langs: [lang], 
          defaultLang: options.defaultLang,
          routesAliases: options.routesAliases,
          isChild: true
         })
      }

      // Handle route aliases
      if (_has(options.routesAliases, `${name}.${lang.slug}`)) {
        path = options.routesAliases[name][lang.slug]
      }
      
      // Prefix path with lang slug if not default lang
      // But don't do it for children
      if (lang.lang !== options.defaultLang && !options.isChild) {
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
