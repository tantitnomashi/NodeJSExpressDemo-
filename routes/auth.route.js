var express = require('express')
var router = express.Router();
var controller = require('../controllers/auth.controller'); 
// database lowdatabse 
// https://github.com/typicode/lowdb/blob/master/README.md

router.get('/login',controller.login);
router.post('/login',controller.loginP);
module.exports = router;
