import axios from 'axios'

export function getConfig(url) {
  return axios({
    method: 'get',
    url: url
  })
}
