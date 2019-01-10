# vuecid-helpers

[![npm version](https://img.shields.io/npm/v/@wearelucid/vuecid-helpers.svg?style=flat-square)](https://www.npmjs.com/package/@wearelucid/vuecid-helpers)

A collection of utility functions:

## API
### getData
Function to get data from WordPress REST API (using axios), [normalize the WordPress](https://github.com/wearelucid/vuecid-helpers/blob/master/src/data-transformation/normalizeWordpress.js) data and [flatten ACF](https://github.com/wearelucid/vuecid-helpers/blob/master/src/data-transformation/flattenACF.js) fields.

### getPreviewData
Function like getData, but getting Data directly from unpublished posts or unpublished changes by using WordPress nonce.

## Data transformation
### applyToOneOrMany
Apply a function to a single object or to every item in an array.

### decodeTitle
Transforms any unicode text in title property into html entity using [decodeHtmlEntity](https://github.com/wearelucid/vuecid-helpers/blob/master/src/misc/decodeHtmlEntity.js) function.

### flattenACF
Remove nesting (flatten) advanced custom fields data structure in WordPress post objects.

E.g.:
```
post: {
  title: 'Standard WordPress post properties like title',
  acf: {
    myCustomField: [Content]
  }
}
```
Becomes
```
post: {
  title: 'Standard WordPress post properties like title',
  myCustomField: [Content]
}
```

### normalizeWordpress
Normalizes post objects.
`post.title.rendered` -> `post.title`
`post.content.rendered` -> `post.content`
`post.excerpt.rendered` -> `post.excerpt` (if present)

### reduceBundle
Function to reduce posts data including only:
- title
- language
- slug
- link
- polylang { current language, translations of post }

### removeFieldsFromPost
As the title says...

## Meta
### generateHreflangs
Generates hreflangs for all translations of a post.
More about the [hreflang attribute](https://moz.com/learn/seo/hreflang-tag).

### generateMetaDescription
Generates meta description for `<head>`.
It uses general meta description (page-wide, from options), which will get overridden if there is a post/page specific meta description set.

### generateMetaImage
Like the meta description the OG Image is generated from the page-wide options, but will use a more specific OG image on a page/post – if set.
It uses the predefined size (`social-share-large`), which we defined in our WordPress image crops.  1280px x 720px. By defining those sizes, an image does not have to be inspected by a platform like facebook, because it does not know the size yet. This saves time.

### generateMetaTitle
Same as meta description but using the title.

### generateMetaInfo
Uses all the above to generate a `metaInfo` object including all properties nuxt needs to generate a proper `<head>` meta part.

## Misc
### decodeHtmlEntity
Decodes unicode characters.

### cleanString
Cleaning a string by using 
- [lowdash's deburr](https://lodash.com/docs/4.17.11#deburr) function
- making everything lowercase ([Lowdash lowercase](https://lodash.com/docs/4.17.11#lowerCase))
- and converting to kebabcase ([Lowdash kebabCase](https://lodash.com/docs/4.17.11#kebabCase))
This is good to generate ids.

Example:
`cleanString('Some string äöü')`
-> 'some-string-aou'

### findPostInArray
Find a post object in an array of posts by comparing the post's slug.

## Routes
### generateLocalizedRoutes
Generate localized routes using Nuxt's generated routes and i18n config.

Child routes are handled separately and don't need localization part. Compare path of root page `'/en/:slug/media'` and child path `':year/:postSlug?'` (without `en`).

Example Outcome:
```
{ path: '/en/:slug/media',
  component:
   '/path-to-project/pages/_slug/media.vue',
  name: 'slug-media-en',
  children: [
    { path: ':year',
       component:
        '/path-to-project/pages/_slug/media/_year/index.vue',
       name: 'slug-media-year-en' 
    },
    { path: ':year/:postSlug?',
       component:
        '/path-to-project/pages/_slug/media/_year/_postSlug.vue',
       name: 'slug-media-year-postSlug-en' 
    }
  ]
}
```

For further understanding check out [vuecid-nuxt's nuxt-config](https://github.com/wearelucid/vuecid-nuxt/blob/master/nuxt.config.js#L180):

### generateRoutesFromData
Uses a .json file as base to generate route to this post or page.

Special behaviour for home slugs.
We use `/` for the default lang home slug, and `/en/` and for the english home etc.

⚠️⚠️⚠️⚠️
For now we cannot have a page with a permalink including home like `/pages/something/home-sweet-home`
In the `generateRoutesFromData` process we remove all pages which include `home`. 🤷‍♂️
Makes sense to be aware of that!
⚠️⚠️⚠️⚠️

## URL
### checkAndGetHomeSlug
Returns homeSlug if we are on home, e.g. `'/en/'` or `'/en'` or `'/'`.

### checkIfSlugIsHome
Tests if slug is `'home'`.

### checkIsHome
Returns true if we are on home, e.g. `'/en/'` or `'/en'` or `'/'`.

### checkIfWordPressPreview
Checks if we are in preview mode by checking for the three special query strings: 
- preview (Boolean)
- preview_nonce (String, to allow preview, generated by WordPress)
- preview_id (Integer, id of post/page) 

### cleanSlug
Gets the naked slug without any slashes or locales.
`/en/my-slug/` -> `my-slug`.

### removeHomeSlug
Removes `'home'` from url.
`removeHomeSlug('https://www.mysite.com/home/')` -> `'https://www.mysite.com/'`

### getPageOrPostLinkFromLang
Gets the path of the translation from a page or post object for a specific language.

### getPathFromUrl
Regex to get the path from url. Makes sure that there is a leading slash.
`getPathFromUrl('https://www.mysite.com/en/myslug/')` -> `'/en/myslug/'`

⚠️ Subdomains don't work with this:
https://regex101.com/r/uMOB5V/3/
`getPathFromUrl('https://www.mysubdomain.mysite.com/en/myslug/')` will not match the regex pattern...

### removeLeadingLang
Removes lang from url (but only `fr`, `en` or `it`).

### removeLeadingSlash
`removeLeadingSlash('/myslug/')` -> `'myslug/'`

### removeTrailingSlash
`removeTrailingSlash('/myslug/')` -> `'/myslug'`

### verifyLeadingSlash
`verifyLeadingSlash('myslug')` -> `'/myslug'`

### verifyTrailingSlash
`verifyTrailingSlash('myslug')` -> `'myslug/'`





# Build
To generate the dist folder just run

``` bash
$ yarn build
```
