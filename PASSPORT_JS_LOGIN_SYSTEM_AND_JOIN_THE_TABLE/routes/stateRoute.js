const express = require('express');
const { Viewstatepage, Addstatepage,insertstatepage,deletstate, editstate,updatestate } = require('../controllers/statecontroller');

const routes = express.Router();

routes.get('/',Viewstatepage)
routes.get('/add',Addstatepage)
routes.post('/insertstatepage',insertstatepage)
routes.get('/deletstate',deletstate)
routes.get('/editstate',editstate)
routes.post('/updatestate',updatestate)



module.exports = routes;