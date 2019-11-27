import doPayment from '../../../src/domain/payment'
import mercadopago from 'mercadopago'

describe('payment domain', () => {
  const body = {
    transaction_amount: 1000,
    payment_method_id: 'visa',
    token: 'ab123',
    installments: 1,
    payer: {
      email: 'test@test.com'
    }
  }

  beforeEach(() => {
    mercadopago.payment.save = jest.fn().mockReturnValue({})
  })

  it('should call mercadopago with expected params', async () => {
    await doPayment(body)

    const paymentData = {...body, description: 'Aprenda React'}
    expect(mercadopago.payment.save).toHaveBeenCalledWith(paymentData)
  })

  it('should return same value as mercadopago.save', async () => {
    const result = await doPayment(body)
    expect(result).toEqual({})
  })

  it('should throw error if body not found', async () => {
    await expect(doPayment({})).rejects.toThrow()
  })
})
