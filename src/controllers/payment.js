import doPayment from '../domain/payment'

const errorMsg = 'There was an error when trying to pay. Please, try again.'
const OK = 200
const INTERNAL_SERVER_ERROR = 500

export default async (req, res, next) => {
  try {
    const paymentResponse = await doPayment(req.body)
    res.json(OK, {
      paymentStatus: paymentResponse.body.status
    })
  } catch(err){
    res.json(INTERNAL_SERVER_ERROR, { message: errorMsg })
  }
  return next()
}
