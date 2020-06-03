var express= require('express');
var router= express.Router();
const { check, validationResult } = require('express-validator');
const { signout,signup,signin,isSignedIn } = require('../controllers/auth');

router.post('/signup',
[
    check("name","name should be of atleast 3 characters").isLength({min:3}),
    check("email","email is required").isEmail(),
    check("password","password should be of  atleast 3 characters").isLength({min:3})
],
signup);

router.post('/signin',
[
    check("email","email is required").isEmail(),
    check("password","password is required").isLength({min:1})
],
signin);

router.get('/signout',signout);

router.get('/testroute',isSignedIn,(req,res)=>{
    // res.send("A Protected route")
    res.json(req.auth)
})

module.exports=router;

