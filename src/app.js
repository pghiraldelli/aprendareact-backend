import app from './core/serverConfig'
import healthCheck from './controllers/healthCheck'

app.get('/health', healthCheck)

export default app
