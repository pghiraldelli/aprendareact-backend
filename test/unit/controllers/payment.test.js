import * as doPayment from '../../../src/domain/payment'
import payment from '../../../src/controllers/payment'

describe('payment controller', () => {
  let response, nextFn
  const request = {
    body: {}
  }
  doPayment.default = jest.fn()
  
  beforeEach(() => {
    response = {
      status: jest.fn(),
      json: jest.fn()
    }
    nextFn = jest.fn()
  })

  afterEach(() => {
    doPayment.default.mockReset()
  })

  describe('when payment is successful', () => {
    doPayment.default.mockImplementation(() => ({ body: { status: 'approved' } }))

    it('should return status 200 and payment status approved', async () => {
      await payment(request, response, nextFn)
  
      expect(doPayment.default).toHaveBeenCalledWith({})
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.json).toHaveBeenCalledWith({ 
        paymentStatus: 'approved' 
      })
      expect(nextFn).toHaveBeenCalled()
    })
  })

  describe('when payment fails', () => {
    it('should return status 500 and error message', async () => {
      await payment(request, response, nextFn)
  
      expect(doPayment.default).toHaveBeenCalledWith({})
      expect(response.status).toHaveBeenCalledWith(500)
      expect(response.json).toHaveBeenCalledWith({
        message: 'There was an error when trying to pay. Please, try again.'
      })
      expect(nextFn).toHaveBeenCalled()
    })
  })
})
