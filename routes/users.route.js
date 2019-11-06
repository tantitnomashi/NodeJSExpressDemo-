var express = require('express');
var multer = require('multer');
var router = express.Router();
var controller = require('../controllers/user.controller'); 
var validate = require('../validate/user.validate');
var auth = require('../middlewares/auth.middlewares');
// database lowdatabse 
// https://github.com/typicode/lowdb/blob/master/README.md

var upload = multer({ dest: './public/uploads/' })



router.get('/',auth.requireAuth,controller.index);
router.get('/search', controller.search);
router.get('/create',controller.create);
router.get('/cookie',(req, res, next)=>{
    res.cookie("aaa",123);
    res.send('hello');
});
//route parameter - dynamic routing
router.get('/:id', controller.id); 
// must install body-parser package and add ref
// ref: http://expressjs.com/en/5x/api.html#req.body
//router.post('/users/create',controller.createP);
router.post('/create',
    upload.single('avatar'),
    validate.createP,
    controller.createP);
module.exports = router;
