import mercadopago from '../config/payment'

const getPaymentData = (body) => (
  {
    description: 'Aprenda React',
    transaction_amount: body.transaction_amount,
    payment_method_id: body.payment_method_id,
    token: body.token,
    installments: body.installments,
    payer: {
      email: body.payer.email
    }
  }
)

const doPayment = async (body) => {
  const paymentData = getPaymentData(body)
  return await mercadopago.payment.save(paymentData)
}

export default doPayment
