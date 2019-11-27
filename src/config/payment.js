import mercadopago from 'mercadopago'

mercadopago.configure({
  sandbox: process.env.NODE_ENV == 'test',
  access_token: process.env.MERCADO_PAGO_TOKEN || ''
})

export default mercadopago
