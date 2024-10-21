const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));
routes.use('/contry', require('./contryRoute'));
routes.use('/state', require('./stateRoute'));
routes.use('/city', require('./cityRoute'));

module.exports = routes;