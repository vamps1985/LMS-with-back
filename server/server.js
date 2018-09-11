const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
 const morgan = require('morgan')
const path = require('path');
const cookieParser = require('cookie-parser');
const expressHandlebars = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
//const bcrypt = require('bcrypt');
const bCrypt = require("bcrypt-nodejs");
//app.use(bodyParser.require('passport')json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json() );

//const routes = require('./routes');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
  url: "mongodb://vamps:27061985gvg@ds261660.mlab.com:61660/vamps"
})
}));
app.use(express.static(__dirname + '/dist'));
const url = "mongodb://vamps:27061985gvg@ds261660.mlab.com:61660/vamps";


MongoClient.connect(url, { useNewUrlParser: true }, function(err, client){

    const db = client.db("vamps");
    const collection = db.collection("users");
    console.log("связь есть")





// sets and uses
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(
//   '/javascripts',
//   express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist'))
// );

//app.use('/api/auth', routes.auth);
app.get("/",function (req, res) {
  if(req.session.user) {
    console.log(req.session.user);
    res.send(req.session.user);
  }
  else {
    res.send(false)
  }
});


app.post("/auth/login",function (req, res) {
  if(req.session.user) {
    console.log(req.session.user._id);
  }

    collection.findOne({ email: req.body.email }, (err, user) => {

        var hash = bCrypt.hashSync(req.body.pas);

        //var passwordIsValid = bcrypt.compareSync (req.body.pas, user.pas);
              console.log(req.body.email);

        if (user && req.body.pas == user.pas ) {

    console.log("Пользователь зайшов в систему "+user.login);
     //res.redirect("/");
    req.session.user = user._id;
    req.session.userLogin = user.login;
    res.send("ok");
    console.log(req.session.user);

      }  else {
            console.log("имя пользователя или пароль неверен")
        }
  });
});

});
app.listen(3000);
