import http from '@/config/http'

export default {
  getJobList (payload) {
    return http.get('/job/getJobList', payload)
  }
}
