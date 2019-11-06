var db = require('../db');
var User = require("../models/user.model");

module.exports.requireAuth = async (req,res,next)=>{

    if(!req.signedCookies.userID){
        res.redirect('/auth/login');
        return;
    }
    var idFromCookie = req.signedCookies.userID;
   // var user = db.get('users').find({id: idFromCookie}).value();
    var user = await User.findById(idFromCookie);
    console.log(user);
    if(!user){
        res.locals.user = {name : 'Login'};
        res.redirect('/auth/login');
        return;
    }else{
        //local variable
        res.locals.user = user;
    }
    next();

};