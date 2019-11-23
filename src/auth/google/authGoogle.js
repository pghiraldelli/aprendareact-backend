import { Strategy } from 'passport-google-oauth20'

const googleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID || 'dummy-client-id',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'dummy-client-secret',
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, cb) => { 
    console.log(profile) 
    cb(null, profile) 
  }
)

export default googleStrategy
