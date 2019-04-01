import _has from 'lodash.has'

/**
 * Generate localized routes using Nuxt's generated routes and i18n config
 *
 * @param  {Object} options - The options object to pass in
 * @param {Array} options.baseRoutes
 * @param {string} options.defaultLang
 * @param {Array} options.langs
 * @param {Object} options.routeAliases
 * @param {Boolean} [options.isChild]
 * @return {Array} Localized routes to be used in Nuxt config
 */

export default function generateLocalizedRoutes(
  options = {
    baseRoutes: [],
    defaultLang: '',
    langs: [],
    routeAliases: {},
    isChild: false
  }
) {
  const localizedRoutes = []
  // Loop through all generated routes
  options.baseRoutes.forEach(baseRoute => {
    // Loop through all configured languages
    options.langs.forEach(lang => {
      // Get values from baseRoute
      const { component } = baseRoute
      let { path, children } = baseRoute
      const { name } = baseRoute
      const meta = { ...baseRoute.meta, isInBundle: true, postType: null }

      // Throw error if no locales provided
      if (options.routeAliases[name] && !options.routeAliases[name].locales) {
        throw new Error('Route aliases have to be nested in a locales object')
      }

      // Recursively generate routes for all children if there are any
      if (children) {
        children = generateLocalizedRoutes({
          baseRoutes: children,
          langs: [lang],
          defaultLang: options.defaultLang,
          routeAliases: options.routeAliases,
          isChild: true
        })
      }

      // Handle route path aliases
      if (
        options.routeAliases[name] &&
        _has(options.routeAliases, `${name}.locales.${lang.slug}`)
      ) {
        path = options.routeAliases[name].locales[lang.slug]
      }

      // Check if in bundle
      if (_has(options.routeAliases, `${name}.isInBundle`)) {
        meta.isInBundle = options.routeAliases[name].isInBundle
      }

      // Check for post type
      if (_has(options.routeAliases, `${name}.postType`)) {
        meta.postType = options.routeAliases[name].postType
      }

      // Prefix path with lang slug if not default lang
      // But don't do it for children
      if (lang.lang !== options.defaultLang && !options.isChild) {
        // Add leading slash if needed (ie. children routes)
        if (path.match(/^\//) === null) path = `/${path}`
        path = `/${lang.slug}${path}`
      }

      // Construct route object
      const route = {
        path,
        component,
        ...(name ? { name: `${name}-${lang.slug}` } : {}),
        ...(children ? { children: children } : {}),
        meta: { ...meta }
      }
      // Push route to array
      localizedRoutes.push(route)
    })
  })

  return localizedRoutes
}
