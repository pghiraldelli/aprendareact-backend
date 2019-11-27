import { server as app, passport } from './config/server'
import healthCheck from './controllers/healthCheck'
import payment from './controllers/payment'

app.get('/health', healthCheck)

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }))

app.get('/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: `${process.env.HOST}/cursos/iniciando-em-react`,
    failureRedirect: `${process.env.HOST}/login/failed`
  })
)

app.post('/payment', payment)

export default app
