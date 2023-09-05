import axios from 'axios'

const baseURL = 'https://api.github.com'

export const makeRequest = ({
  url='/search/repositories', method = 'get', data = {}, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL,
  headers
})
