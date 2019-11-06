var express = require('express')
var router = express.Router();
var controller = require('../controllers/products.controller'); 
// database lowdatabse 
// https://github.com/typicode/lowdb/blob/master/README.md

router.get('/products',controller.show);
module.exports = router;
// export method to the route