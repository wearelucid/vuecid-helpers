/**
 * Test if slug is homeSlug ('home').
 *
 * @param  {string} slug
 * @param  {string} [homeSlug]
 * @return {Boolean}
 */

export default function checkIfSlugIsHome(slug, homeSlug = 'home') {
  return slug === homeSlug
}
