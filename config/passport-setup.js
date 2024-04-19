var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User =require('../models/user-models');

passport.use(
    new GoogleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // console.log(profile);

    User.findOne({googleID:profile.id})
    .then((currentUser)=> {
        if(currentUser)
        {
            console.log(user);
        }
        else
        {
            new User({
                username: profile.displayName,
                googleID: profile.id
            }).save();
        }
    })
    
}))
