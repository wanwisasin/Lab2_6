import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/passenger')
  },
  getEvent(id: number) {
    return apiClient.get('/passenger/' + id)
  }
}
