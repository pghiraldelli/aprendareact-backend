import { Strategy } from 'passport-google-oauth20'

const googleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, cb) => { 
    console.log(profile) 
    cb(null, profile) 
  }
)

export default googleStrategy
