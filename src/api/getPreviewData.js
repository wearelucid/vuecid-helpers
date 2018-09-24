import axios from 'axios'
import normalizeWordpress from '../data-transformation/normalizeWordpress'
import flattenACF from '../data-transformation/flattenACF'

export default function getPreviewData(backendUrl, previewUrl) {
  return axios
    .get(`${backendUrl + previewUrl}`, {
      withCredentials: true,
      transformResponse: [].concat(
        axios.defaults.transformResponse,
        normalizeWordpress,
        flattenACF
      )
    })
    .then(res => res.data)
}
