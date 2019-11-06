var Product = require("../../models/product.model");
var md5 = require('md5');
// Paging
module.exports.show = async (req,res)=> { 
   var products = await Product.find();
   console.log(products);
   res.json(products);
};
