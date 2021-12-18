module.exports.Plugin = auth => {
    auth.options.set('loginFile', `${__dirname}/pages/login.hbs`);
    auth.options.set('signupFile', `${__dirname}/pages/signup.hbs`);
}