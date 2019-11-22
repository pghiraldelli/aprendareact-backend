import express from 'express'
import cookieSession from 'cookie-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import passport from '../auth/google/auth-google'

const oneDayInMiliseconds = 24 * 60 * 60 * 100
const cookieKey = process.env.COOKIE_KEY

const server = express()

server.use(
  cookieSession({
    name: 'session',
    keys: ['secret'],
    maxAge: oneDayInMiliseconds
  })
)

server.use(bodyParser.json())

server.use(cookieParser(cookieKey))

server.use(
  cors({
    origin: process.env.HOST,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })
)

server.use(passport.initialize())
server.use(passport.session())

export {
  server,
  passport
} 
