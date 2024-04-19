const router = require('express').Router();
const passport = require('passport');

// login 
router.get('/login',(req,res) => {
    console.log('login');
})

// signup with google
router.get('/google',passport.authenticate('google',
{scope:['profile']}
))

// logout 
router.get('/logout',(req,res) => {
    console.log('logout');
})

// redirect 
router.get('/google/redirect',passport.authenticate('google'),(req,res) => {
    res.send('Authenticated');
})

module.exports = router;