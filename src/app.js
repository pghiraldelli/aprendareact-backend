import { server as app, passport } from './core/serverConfig'
import healthCheck from './controllers/healthCheck'

app.get('/health', healthCheck)

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }))

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: 'https://www.aprendareact.com.br',
    failureRedirect: 'https://www.aprendareact.com.br/fail'
  })
)

export default app
