import request from 'supertest'
import mercadopago from 'mercadopago'
import app from '../../../src/app'

describe('payment', () => {
  describe('POST /payment', () => {
    const data = {
      transaction_amount: 1000,
      payment_method_id: 'visa',
      token: 'abc123',
      installments: 1,
      payer: {
        email: 'test@test.com'
      }
    }

    mercadopago.configure = jest.fn()

    it('returns status 200 and payment status approved', () => {
      mercadopago.payment.save = jest.fn().mockImplementation(() => (
        {body: {status: 'approved'}}
      ))

      return request(app)
        .post('/payment')
        .send(data)
        .then((res) => {
          expect(res.status).toEqual(200)
          expect(res.body.paymentStatus).toEqual('approved')
        })
    })

    it('returns status 500 and error message', () => {
      mercadopago.payment.save = jest.fn().mockImplementation(() => {
        throw new Error()
      })
      const errorMsg = 'There was an error when trying to pay. Please, try again.'

      return request(app)
        .post('/payment')
        .send(data)
        .then((res) => {
          expect(res.status).toEqual(500)
          expect(res.body.message).toEqual(errorMsg)
        })
    })
  })
})
