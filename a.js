
//init app
const e = require('express');

// enviroment variable
require('dotenv').config();
// for body request message 
var bodyParser = require('body-parser');
var userRoute = require('./routes/users.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/products.route');
var cartRoute = require('./routes/cart.route');
var apiProductRoute = require('./api/routes/products.route');
// cookie parser
var cookieParser = require('cookie-parser')
var sessionMiddleware  = require('./middlewares/session.middlewares');

// configure for mongoDB
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
// set view 
const app = e();
const port = 3000;
app.set('view engine','pug');
app.set('views','./views');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// for cookie 
//minhtan is sercret string for signed cookie
app.use(cookieParser(process.env.SESSION_SERCRET));

// for sessionId
app.use(sessionMiddleware);
// for route
app.use('/auth', authRoute);
app.use('/users',userRoute);
app.use('/products',productRoute);
app.use('/cart',cartRoute);
app.use('/api/products',apiProductRoute);

// for static file in folder public 
app.use(e.static('public'));
app.get('/', (req,res)=> { 
   // res.send("Hello from Singapore");
   res.render('index');
});

// port
app.listen(port, ()=>{
    console.log("NodeJS app using Express by Tan Tran M.," + port);
});
