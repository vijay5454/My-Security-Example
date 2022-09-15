const path = require('path');
const cookieSession = require('cookie-session');
const helmet = require('helmet');
const {passport} = require('./passport');
const {config} = require('./config');
const express = require('express');


function checkLoggedIn(req, res, next){
    const loggedIn = req.isAuthenticated() && req.user;
    if(!loggedIn){
        return res.status(401).json({
            error: 'Please Login',
        });
    };
    return next();
}

app = express();

app.use(helmet());

app.use(cookieSession({
    name: 'session',
    maxAge: 24*60*60*1000,
    keys: [config.COOKIE_KEY1, config.COOKIE_KEY2],
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', {
    scope: ['email'],
}));

app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: true,
}));

app.get('/logout', (req, res)=>{
    req.logout();
    return res.redirect('/');
});

app.get('/secret', checkLoggedIn, (req, res)=>{
    return res.send('Your secret number is 54');
});

app.get('/', (req, res)=>{
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = {
    app,
}