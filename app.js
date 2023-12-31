//creating a http server in nodejs
//import module
const http=require('http')
const express=require('express');

const bodyParser=require('body-parser')

const app=express();
 //express intergation registration for templete

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
//handlebar 

app.set('view engine','ejs'); //directly supprot to express
app.set('views','views');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname,'public'))); //take tha path make it accesible to public
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);



app.listen(3000);