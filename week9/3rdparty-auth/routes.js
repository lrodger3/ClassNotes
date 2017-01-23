var passport = require('passport')

module.exports = (app) =>{
    
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/gmail.send'] }));
    
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

    app.get('/api/me', (req, res)=>{
        res.send(req.user);
    })
    
}