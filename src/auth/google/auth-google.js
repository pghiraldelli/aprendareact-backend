import passport from 'passport'
import { Strategy } from 'passport-google-oauth20'

passport.use(new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log(profile)
    if(profile){
      return cb(null, profile)
    }else{
      return cb(null, false)
    }
  }
))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

export default passport
