var db = require('../db');
var Session = require("../models/session.model");
module.exports.addToCart = (req,res,next)=>{
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId){
        res.redirect('/products/products');
        return;
    }
    //var count1 = db.get('sessions').find({id: sessionId}).get('cart.'+productId,0).value();
   //// var count = Session.findOne({ sessionId: sessionId}).cart.productId;

    if(!count){
        count = 0;
    }
    console.log(count +" set count = 0");
//    var conditions = { cart.productId: 'bourne' }
//   , update = { $inc: { visits: 1 }}
//   , options = { multi: true };
    // db.get('sessions').find({id: sessionId})
    // .set('cart.'+productId, count1+1).write();
    // res.redirect('/products/products');
};
