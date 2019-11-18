import express from 'express'
import cookieSession from 'cookie-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const oneDayInMiliseconds = 24 * 60 * 60 * 100
const cookieKey = process.env.COOKIE_KEY

const app = express()

app.use(
    cookieSession({
        name: 'session',
        keys: ['secret'],
        maxAge: oneDayInMiliseconds
    })
)

app.use(bodyParser.json())

app.use(cookieParser(cookieKey))

app.use(
    cors({
        origin: process.env.HOST,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
    })
)

export default app
