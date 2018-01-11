const authControllers = require('../controllers/authcontroller.js');
module.exports = (app) => {
    app.get('/signup', authControllers.signup);
};
