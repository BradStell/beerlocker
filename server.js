const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const beerController = require('./controllers/beer');
const userController = require('./controllers/user');
const authController = require('./controllers/auth');

const app = express();
const port = process.env.PORT || 4567;
const router = express.Router();


mongoose.connect('mongodb://localhost:27017/beerlocker');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

router.route('/beers')
    .post(authController.isAuthenticated, beerController.postBeers)
    .get(authController.isAuthenticated, beerController.getBeers);

router.route('/beers/:beer_id')
    .get(authController.isAuthenticated, beerController.getBeer)
    .put(authController.isAuthenticated, beerController.putBeer)
    .delete(authController.isAuthenticated, beerController.deleteBeer);

router.route('/users')
    .post(authController.isAuthenticated, userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);


// register all our routes with /api
app.use('/api', router);

app.listen(port);
console.log(`Insert beer on port ${port}`);