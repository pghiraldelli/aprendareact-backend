import healthCheck from '../../../src/controllers/healthCheck'

describe('healthCheck controller', () => {
  let response, nextFn

  beforeEach(() => {
    response = {
      send: jest.fn()
    }
    nextFn = jest.fn()
  })

  it('should return OK as status code and call next function', () => {
    healthCheck(null, response, nextFn)
    expect(response.send).toHaveBeenCalledWith(200)
    expect(nextFn).toHaveBeenCalled()
  })
})
