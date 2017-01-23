var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    User = require('../models/user');

passport.serializeUser((user, next)=>{
    next(null, user.id)
})

passport.deserializeUser((id, next)=>{
    // Find user in DB
    User.findOne({_id : id}, (err, user)=>{
        next(null, user)    
    })
})


passport.use(
    // How we are defining a successful login
    new GoogleStrategy({
        clientID : "828157815943-9gipibu4983gqf9mflqqpquj10543kmt.apps.googleusercontent.com",
        clientSecret : "9V0kE1cUtIJhnXWksYY2W3Ax",
        callbackURL : "https://refactoru-devaio.c9users.io/auth/google/callback"
    }, (accessToken, refreshToken, profile, next)=>{
      console.log(profile);
      console.log(accessToken);
      console.log(refreshToken);
      
      // find or create user in DB
      User.findOne({gid : profile.id}, (err, user)=>{
          if(!user){
              var newuser = new User({
                  name : profile.displayName,
                  email : profile.emails[0].value,
                  gid : profile.id
              })
              newuser.save((err, doc)=>{
                  next(null, doc)
              })
          }
          else{
              next(null, user);
          }
      })
      
    })

)