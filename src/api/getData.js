import axios from 'axios'
import normalizeWordpress from '../data-transformation/normalizeWordpress'
import flattenACF from '../data-transformation/flattenACF'

export default function getData(type, lang) {
  return axios
    .get(`/data/${type}.${lang}.json`, {
      transformResponse: [].concat(
        axios.defaults.transformResponse,
        normalizeWordpress,
        flattenACF
      )
    })
    .then(res => res.data)
}
