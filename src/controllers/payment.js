import doPayment from '../domain/payment'

const errorMsg = 'There was an error when trying to pay. Please, try again.'
const OK = 200
const INTERNAL_SERVER_ERROR = 500

export default async (req, res, next) => {
  try {
    const paymentResponse = await doPayment(req.body)
    res.status(OK)
    res.json({
      paymentStatus: paymentResponse.body.status
    })
  } catch(err){
    res.status(INTERNAL_SERVER_ERROR)
    res.json({ message: errorMsg })
  }
  return next()
}
