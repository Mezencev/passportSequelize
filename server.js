const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;

//for body-parser always
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//for passport always
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//for handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.send('Welcome to sequelize and passport');
});

const db = require('./app/models/index');

const authRoute = require('./app/routes/auth.js')(app); 

require('./app/config/passport/passport.js')(passport, models.user);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log('Nice! Database looks fine', PORT);
    });
  });