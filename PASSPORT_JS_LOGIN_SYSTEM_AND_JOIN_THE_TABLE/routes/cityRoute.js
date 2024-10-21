const express = require('express');
const {contrywisefilter,viewcitypage, addcitypage,insertcitypage,deletecitypage,editcitypage,updatecitypage } = require('../controllers/citycontroller');

const routes = express.Router();

routes.get('/',viewcitypage)
routes.get('/add',addcitypage)
routes.post('/insertcitypage',insertcitypage)
routes.get('/deletecitypage',deletecitypage)
routes.get('/editcitypage',editcitypage)
routes.post('/updatecitypage',updatecitypage)
routes.get('/contrywisefilter',contrywisefilter)



module.exports = routes;