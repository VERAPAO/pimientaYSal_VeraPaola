const express = require('express');
const router = express.Router();
const othersControllers = require('../controllers/others/index')


router.get('/', othersControllers.index)





module.exports = router;