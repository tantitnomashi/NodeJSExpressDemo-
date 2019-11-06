var express = require('express')
var router = express.Router();
var controller = require('../controllers/cart.controller'); 
// database lowdatabse 
// https://github.com/typicode/lowdb/blob/master/README.md

router.get('/add/:productId',controller.addToCart);
module.exports = router;
// export method to the route