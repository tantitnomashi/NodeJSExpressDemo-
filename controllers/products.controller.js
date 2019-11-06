// var db = require('../db');
var Product = require("../models/product.model");
var md5 = require('md5');
// Paging
module.exports.show =  (req,res)=> { 
    // var page = parseInt(req.params.page);  
    // var perPage = 8;
    /*
    var start =  (page -1);
    var end = page * webkitConvertPointFromNodeToPage;

    res.render('products/products', {
        products: db.get('products').value().slice(start,end)
    });
    */
//    var start =  (page - 1) * perPage;
//    var drop = ( page - 1)*perPage;
//    res.render('products/products', {
//     products: db.get('products').drop(drop).take(perPage).value()
// });


    Product.find().then((products)=>{
        res.render('products/products', {
         products: products});
            
    });

};


