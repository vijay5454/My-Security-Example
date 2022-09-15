const passport = require('passport');
const {AUTH_OPTIONS} = require('./config');
const {Strategy} = require('passport-google-oauth20');

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

function verifyCallback(accesstoken, refreshtoken, profile, done){
    console.log('Google Authentication is successful!', profile);
    done(null, profile);
};

passport.serializeUser((user, done)=>{
    console.log(`Current User id is: ${user.id}`);
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    console.log(`Current User id is: ${id}`);
    done(null, id);
});

module.exports = {
    passport,
}