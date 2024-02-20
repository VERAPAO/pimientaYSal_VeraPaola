const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu/index')




router.get('/:id', menuController.detalleMenu);





module.exports = router;

