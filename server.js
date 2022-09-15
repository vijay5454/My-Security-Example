const https = require('https');
const fs = require('fs');
const {app} = require('./app');


https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app).listen(8000, ()=>{
    console.log('Listening on Port 8000');
});