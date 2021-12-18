module.exports.Plugin = auth => {

    const path = require('path');

    auth.options.set('loginFile', path.join(__dirname + '/plugins/login.hbs'));
    auth.options.set('signupFile', path.join(__dirname + '/plugins/signup.hbs'));
}