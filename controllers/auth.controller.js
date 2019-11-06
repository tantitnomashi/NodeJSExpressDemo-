var db = require('../db');
var md5 = require('md5');
// User model MongoDb
var User = require("../models/user.model");

module.exports.login =  (req,res)=> {
    res.render('auth/login');

};
module.exports.loginP = async (req,res)=> {
    var email = req.body.email;
    var unhashpassword = req.body.password;
    var password = md5(unhashpassword);
   // var user = db.get('users').find({email: email}).value();

    var user = await User.findOne({ email: email});
    if(!user || user.password !== password ){
        res.render('auth/login', 
        {
            errors : ['Wrong password or email'],
            values : req.body
        });
        return;
    }
    // set cookie for user 
    res.cookie('userID',user.id,{
        signed: "true"
    }); // signed cookie 
    res.redirect('/users');

};
