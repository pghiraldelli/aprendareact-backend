import request from 'supertest'
import app from '../../../src/app'

describe('health', () => {
  describe('GET /health', () => {
    it('returns status 200', () => {
      return request(app)
        .get('/health')
        .then((res) => {
          expect(res.status).toEqual(200)
        })
    })
  })

  describe('POST /health', () => {
    it('returns status 404', () => {
      return request(app)
        .post('/health')
        .then((res) => {
          expect(res.status).toEqual(404)
        })
    })
  })
})
