const express = require('express');
const { Viewcontry, Addcontry, insertcontry, deletcontry, updatecontry, editcontry } = require('../controllers/contrycontroller');

const routes = express.Router();

routes.get('/',Viewcontry)
routes.get('/add',Addcontry)
routes.post('/insertcontry',insertcontry)
routes.get('/deletcontry',deletcontry)
routes.get('/editcontry',editcontry)
routes.post('/updatecontry',updatecontry)



module.exports = routes;