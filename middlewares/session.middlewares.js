const shortid = require('shortid');
var db = require('../db');
var Session = require("../models/session.model");

module.exports = async  (req,res,next)=>{
    if(!req.signedCookies.sessionId){
    // set cookie for user 
        var sessionId = shortid.generate();
       
        res.cookie('sessionId',sessionId,{
            signed: true
        }); // signed cookie 

        var session = new Session({
            sessionId : sessionId,
            cart : ''
        });
        await session.save();
    }
    next();
}