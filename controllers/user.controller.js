// get Model for User Controller 
var User = require("../models/user.model");
//use this file as a controller 
module.exports.index = async  (req,res)=> {
    var users = await User.find();
    res.render('users/index', {     
        users: users
    });
};
module.exports.search = async (req,res)=> {
    var q = req.query.q;
    var matched = await User.find({name: new RegExp('^'+q+'$', "i")});
    res.render('users/index',{
        users: matched
    });
    
};

module.exports.id = async(req,res)=>{
    var id =req.params.id;
    var user = await User.findById(id);
    res.render('users/view',{
            user: user
        });   
  };
module.exports.create = (req,res)=>{
    res.render('users/create');
};
module.exports.createP = async(req,res)=>{
   req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    var user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        avatar: req.body.avatar,
        phone: req.body.phone
    });
    await user.save();
    res.redirect("/users");

};