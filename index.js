module.exports.Plugin = auth => {

    const path = require('path');

    auth.options.loginFile = path.join(__dirname + '/plugins/login.hbs');
    auth.options.signupFile = path.join(__dirname + '/plugins/signup.hbs');
}