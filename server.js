const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const db = require('./app/models/index');

//for body-parser always
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//for passport always
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send('Welcome to sequelize and passport');
});

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log('Nice! Database looks fine', PORT);
    });
  });