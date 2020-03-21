const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const profileRoutes = require('./routes/profile');
const userRoutes = require('./routes/user');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI)
    .then(function () {
        console.log('MongoDB connected.')
    })
    .catch(function (error) {
        console.log(error)
    });

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use('/api/profile', profileRoutes);
app.use('/api/user', userRoutes);

module.exports = app;