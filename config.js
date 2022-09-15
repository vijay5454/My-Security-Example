require('dotenv').config();

const config = {
    COOKIE_KEY1: process.env.COOKIE_KEY1,
    COOKIE_KEY2: process.env.COOKIE_KEY2,
    CLIENTID: process.env.CLIENTID,
    CLIENTSECRET: process.env.CLIENTSECRET
};

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENTID,
    clientSecret: config.CLIENTSECRET
};


module.exports = {
    config, 
    AUTH_OPTIONS,
}