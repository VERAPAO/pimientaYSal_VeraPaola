const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

const mainRoute = require('./routes/index.route.js');
const detalleMenu = require('./routes/detalleMenu.route.js');






app.use(express.static('public'));


app.set('view engine', 'ejs')
app.set("views","./views")



app.use('/', mainRoute);
app.use('/detalle-menu', detalleMenu);





app.listen(port, ()=> console.log(`http://localhost:${port}`))